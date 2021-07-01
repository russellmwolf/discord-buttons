const { MessageComponentTypes } = require('../Constants.js');
const BaseMessageComponent = require('./interfaces/BaseMessageComponent');
const { resolveString } = require('discord.js').Util;
const {
    resolveMaxValues,
    resolveMinValues,
    resolveMenuOptions
} = require('../Util');

class MessageMenu extends BaseMessageComponent {

    constructor(data = {}) {
        super({ type: 'SELECT_MENU' });
        this.setup(data);
    }

    setup(data) {

        this.placeholder = 'placeholder' in data ? resolveString(data.style) : null;

        this.options = resolveMenuOptions(this);

        this.max_values = resolveMaxValues(this);

        this.min_values = resolveMinValues(this);

        this.options = [];
        if ('option' in data) {
            this.options.push(BaseMessageComponent.create(data.option));
        }

        if ('options' in data) {
            data.options.map(c => this.options.push(BaseMessageComponent.create(c.type = 'SELECT_MENU_OPTION')));
        }

        if (('id' in data && data.id) || ('custom_id' in data && data.custom_id))
            this.custom_id = data.id || data.custom_id;
        else this.custom_id = undefined

        return this;
    }

    addOption(option) {
        this.options.push(BaseMessageComponent.create(option.type = 'SELECT_MENU_OPTION'));
        return this;
    }

    addOptions(...options) {
        this.options.push(...options.flat(Infinity).map(c => BaseMessageComponent.create(c.type = 'SELECT_MENU_OPTION')));
        return this;
    }

    removeOptions(index, deleteCount, ...options) {
        this.components.splice(
            index,
            deleteCount,
            ...options.flat(Infinity).map(c => BaseMessageComponent.create(c.type = 'SELECT_MENU_OPTION')),
        );
        return this;
    }

    setPlaceholder(label) {
        label = resolveString(label);
        this.label = label;
        return this;
    }

    toJSON() {
        return {
            type: MessageComponentTypes.SELECT_MENU,
            placeholder: this.placeholder,
            custom_id: this.custom_id
        }
    }

}

module.exports = MessageMenu;