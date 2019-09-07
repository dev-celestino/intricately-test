import Vue from 'vue';

const requireComponent = require.context('./components', false, /Int[\w-]+\.vue$/)

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    const componentName = upperFirst(
        camelCase(
            fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
        )
    )
    Vue.component(componentName, componentConfig.default || componentName)
});

function upperFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1)
}

function camelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}