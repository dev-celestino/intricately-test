import Vue from 'vue';

requireComponents(require.context('./atoms', true, /Int[\w-]+\.vue$/))
requireComponents(require.context('./molecules', true, /Int[\w-]+\.vue$/))

function requireComponents(context) {
    context.keys().forEach(fileName => {
        const componentConfig = context(fileName)
        const componentName = upperFirst(
            camelCase(fileName.replace(/^\.\/(\w+)/, '').replace(/\.\w+$/, '').replace(/^\//g, ''))
        )

        Vue.component(componentName, componentConfig.default || componentName)
    });

}

function upperFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1)
}

function camelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}