/* eslint-disable no-prototype-builtins */
interface Object {
    hasOwnProperty<O extends Object, K extends PropertyKey>(key: K): this is O & Record<K, unknown>;
}

type InferValue<Prop extends PropertyKey, Desc> =
    Desc extends { get(): any, value: any } ? never :
    Desc extends { value: infer T } ? Record<Prop, T> :
    Desc extends { get(): infer T } ? Record<Prop, T> : never;

type DefineProperty<
    Prop extends PropertyKey,
    Desc extends PropertyDescriptor> =
    Desc extends { writable: any, set(val: any): any } ? never :
    Desc extends { writable: any, get(): any } ? never :
    Desc extends { writable: false } ? Readonly<InferValue<Prop, Desc>> :
    Desc extends { writable: true } ? InferValue<Prop, Desc> :
    Readonly<InferValue<Prop, Desc>>

function defineProperty<
    Obj extends object,
    Key extends PropertyKey,
    PDesc extends PropertyDescriptor>
    (obj: Obj, prop: Key, val: PDesc):
    asserts  obj is Obj & DefineProperty<Key, PDesc> {
    Object.defineProperty(obj, prop, val)
}

export function updateImageProperties(obj: Object, folder: string): void {
    const folderPath = `${import.meta.env.BASE_URL}/${folder}`;

    // Check if the object has an "image" property
    if (obj.hasOwnProperty('image')) {
        defineProperty(obj, 'placeholder', {
            value: `${folderPath}/placeholder/${obj.image}`,
            writable: false,
        })

        obj.image = `${folderPath}/${obj.image}`;
    }
    else if (obj.hasOwnProperty('images') && Array.isArray(obj.images)) {
        defineProperty(obj, 'placeholders', {
            value: [] as string[],
            writable: true
        })

        for (const idx in obj.images) {
            obj.placeholders.push(`${folderPath}/placeholder/${obj.images[idx]}`)

            obj.images[idx] = `${folderPath}/${obj.images[idx]}`;
        }
    }
    else if (obj.hasOwnProperty('enfants') && Array.isArray(obj.enfants))
        updateImagePropertiesList(obj.enfants, folder)
}

export function updateImagePropertiesList(objs: Object[], folder: string) {
    for (const obj of objs) {
        updateImageProperties(obj, folder)
    }
}