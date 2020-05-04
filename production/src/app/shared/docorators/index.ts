export function EmjObj() {
    return (target:Object,key:string) => {
        const val = target[key];
        const getter = () => {
            return val;
        }
        const setter = (val:string) => {
            val = `你好${val}，表情包`
        }
        Object.defineProperty(target,key,{
            get:getter,
            set:setter,
            enumerable:true,
            configurable:true
        })
    }
}