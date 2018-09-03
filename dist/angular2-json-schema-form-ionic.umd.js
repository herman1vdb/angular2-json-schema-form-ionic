(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('angular2-json-schema-form'), require('lodash'), require('@angular/common'), require('@angular/forms'), require('ionic-angular')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'angular2-json-schema-form', 'lodash', '@angular/common', '@angular/forms', 'ionic-angular'], factory) :
	(factory((global['angular2-json-schema-form-ionic'] = {}),global.core,global.angular2JsonSchemaForm,global._,global.common,global.forms,global.ionicAngular));
}(this, (function (exports,core,angular2JsonSchemaForm,_,common,forms,ionicAngular) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IonicButtonComponent = (function () {
    function IonicButtonComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    /**
     * @return {?}
     */
    IonicButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
        if (angular2JsonSchemaForm.hasOwn(this.options, 'disabled')) {
            this.controlDisabled = this.options.disabled;
        }
        else if (this.jsf.formOptions.disableInvalidSubmit) {
            this.controlDisabled = !this.jsf.isValid;
            this.jsf.isValidChanges.subscribe(function (isValid) { return _this.controlDisabled = !isValid; });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IonicButtonComponent.prototype.updateValue = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (typeof this.options.onClick === 'function') {
            this.options.onClick(event);
        }
        else {
            this.jsf.updateValue(this, event.target.value);
        }
    };
    IonicButtonComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ionic-button-widget',
                    template: "<div [ngClass]=\"options?.htmlClass || ''\"> <button ion-button [attr.readonly]=\"options?.readonly ? 'readonly' : null\" [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\" [color]=\"options?.color || 'primary'\" [disabled]=\"controlDisabled || options?.readonly\" [id]=\"'control' + layoutNode?._id\" [name]=\"controlName\" [type]=\"layoutNode?.type\" [value]=\"controlValue\" (click)=\"updateValue($event)\"> <ion-icon *ngIf=\"options?.icon\" [name]=\"options?.icon\"></ion-icon> <span *ngIf=\"options?.title\" [innerHTML]=\"options?.title\"></span> </button> </div> ",
                },] },
    ];
    /** @nocollapse */
    IonicButtonComponent.ctorParameters = function () { return [
        { type: angular2JsonSchemaForm.JsonSchemaFormService, },
    ]; };
    IonicButtonComponent.propDecorators = {
        "layoutNode": [{ type: core.Input },],
        "layoutIndex": [{ type: core.Input },],
        "dataIndex": [{ type: core.Input },],
    };
    return IonicButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IonicInputComponent = (function () {
    function IonicInputComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.autoCompleteList = [];
    }
    /**
     * @return {?}
     */
    IonicInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IonicInputComponent.prototype.updateValue = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!!this.options.onChange) {
            this.options.onChange(this.controlValue, this);
        }
        this.options.showErrors = true;
        this.jsf.updateValue(this, event.target.value);
    };
    IonicInputComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'input-widget',
                    template: "<ion-item [color]=\"options?.ionic?.color\" [attr.no-lines]=\"options?.ionic?.noLines ? '' : null\"> <ion-label *ngIf=\"options?.title\" [attr.for]=\"'control' + layoutNode?._id\" [ngClass]=\"options?.labelHtmlClass || ''\" [style.display]=\"options?.notitle ? 'none' : ''\" [innerHTML]=\"options?.title\" stacked > </ion-label> <ion-input *ngIf=\"boundControl\" [formControl]=\"formControl\" [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\" [attr.list]=\"'control' + layoutNode?._id + 'Autocomplete'\" [attr.maxlength]=\"options?.maxLength\" [attr.minlength]=\"options?.minLength\" [attr.pattern]=\"options?.pattern\" [attr.placeholder]=\"options?.placeholder\" [attr.required]=\"options?.required\" [ngClass]=\"options?.fieldHtmlClass || ''\" [id]=\"'control' + layoutNode?._id\" [readonly]=\"options?.readonly\" [type]=\"layoutNode?.type\" (ionBlur)=\"updateValue($event)\"> </ion-input> </ion-item> <ion-item *ngIf=\"options?.showErrors && options?.errorMessage\" [color]=\"options?.ionic?.color\" [attr.no-lines]=\"options?.ionic?.noLines ? '' : null\"> <p [innerHTML]=\"options?.errorMessage\" ion-text color=\"danger\"></p> </ion-item> ",
                },] },
    ];
    /** @nocollapse */
    IonicInputComponent.ctorParameters = function () { return [
        { type: angular2JsonSchemaForm.JsonSchemaFormService, },
    ]; };
    IonicInputComponent.propDecorators = {
        "layoutNode": [{ type: core.Input },],
        "layoutIndex": [{ type: core.Input },],
        "dataIndex": [{ type: core.Input },],
    };
    return IonicInputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IonicCheckboxComponent = (function () {
    function IonicCheckboxComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.trueValue = true;
        this.falseValue = false;
    }
    /**
     * @return {?}
     */
    IonicCheckboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.options = this.layoutNode.options || {};
        console.log(this.options);
        this.jsf.initializeControl(this);
        if (this.controlValue === null || this.controlValue === undefined) {
            this.controlValue = false;
            this.jsf.updateValue(this, this.falseValue);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    IonicCheckboxComponent.prototype.updateValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!!this.options.onChange) {
            this.options.onChange(this.controlValue, this);
        }
        this.options.showErrors = true;
        this.jsf.updateValue(this, value ? this.trueValue : this.falseValue);
    };
    Object.defineProperty(IonicCheckboxComponent.prototype, "isChecked", {
        get: /**
         * @return {?}
         */
        function () {
            return this.jsf.getFormControlValue(this) === this.trueValue;
        },
        enumerable: true,
        configurable: true
    });
    IonicCheckboxComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'checkbox-widget',
                    template: "<ion-item [color]=\"options?.ionic?.color\" [attr.no-lines]=\"options?.ionic?.noLines ? '' : null\"> <ion-label *ngIf=\"options?.title\" [attr.for]=\"'control' + layoutNode?._id\" [ngClass]=\"options?.labelHtmlClass || ''\" [style.display]=\"options?.notitle ? 'none' : ''\" [innerHTML]=\"options?.title\" > </ion-label> <ion-checkbox [(ngModel)]=\"controlValue\" [disabled]=\"controlDisabled\" (ionChange)=\"updateValue($event.value)\" [id]=\"'control' + layoutNode?._id\" > </ion-checkbox> </ion-item> <ion-item *ngIf=\"options?.showErrors && options?.errorMessage\"> <p [innerHTML]=\"options?.errorMessage\"></p> </ion-item> ",
                },] },
    ];
    /** @nocollapse */
    IonicCheckboxComponent.ctorParameters = function () { return [
        { type: angular2JsonSchemaForm.JsonSchemaFormService, },
    ]; };
    IonicCheckboxComponent.propDecorators = {
        "layoutNode": [{ type: core.Input },],
        "layoutIndex": [{ type: core.Input },],
        "dataIndex": [{ type: core.Input },],
    };
    return IonicCheckboxComponent;
}());

var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IonicFrameworkComponent = (function () {
    function IonicFrameworkComponent(changeDetector, jsf) {
        this.changeDetector = changeDetector;
        this.jsf = jsf;
        this.frameworkInitialized = false;
        this.formControl = null;
        this.parentArray = null;
        this.isOrderable = false;
        this.dynamicTitle = null;
    }
    Object.defineProperty(IonicFrameworkComponent.prototype, "showRemoveButton", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.layoutNode || !this.widgetOptions.removable ||
                this.widgetOptions.readonly || this.layoutNode.type === '$ref') {
                return false;
            }
            if (this.layoutNode.recursiveReference) {
                return true;
            }
            if (!this.layoutNode.arrayItem || !this.parentArray) {
                return false;
            }
            // If array length <= minItems, don't allow removing any items
            return this.parentArray.items.length - 1 <= this.parentArray.options.minItems ? false :
                // For removable list items, allow removing any item
                this.layoutNode.arrayItemType === 'list' ? true :
                    // For removable tuple items, only allow removing last item in list
                    this.layoutIndex[this.layoutIndex.length - 1] === this.parentArray.items.length - 2;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    IonicFrameworkComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initializeFramework();
    };
    /**
     * @return {?}
     */
    IonicFrameworkComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (!this.frameworkInitialized) {
            this.initializeFramework();
        }
        if (this.dynamicTitle) {
            this.updateTitle();
        }
    };
    /**
     * @return {?}
     */
    IonicFrameworkComponent.prototype.initializeFramework = /**
     * @return {?}
     */
    function () {
        if (this.layoutNode) {
            this.options = _.cloneDeep(this.layoutNode.options || {});
            this.widgetLayoutNode = __assign({}, this.layoutNode, { options: _.cloneDeep(this.layoutNode.options || {}) });
            this.widgetOptions = this.widgetLayoutNode.options;
            this.formControl = this.jsf.getFormControl(this);
            if (angular2JsonSchemaForm.isDefined(this.widgetOptions.minimum) &&
                angular2JsonSchemaForm.isDefined(this.widgetOptions.maximum) &&
                this.widgetOptions.multipleOf >= 1) {
                this.layoutNode.type = 'range';
            }
            if (!_.includes(['$ref', 'advancedfieldset', 'authfieldset', 'button', 'card',
                'checkbox', 'expansion-panel', 'help', 'message', 'msg', 'section',
                'submit', 'tabarray', 'tabs'], this.layoutNode.type) &&
                /{{.+?}}/.test(this.widgetOptions.title || '')) {
                this.dynamicTitle = this.widgetOptions.title;
                this.updateTitle();
            }
            if (this.layoutNode.arrayItem && this.layoutNode.type !== '$ref') {
                this.parentArray = this.jsf.getParentNode(this);
                
            }
            this.frameworkInitialized = true;
        }
        else {
            this.options = {};
        }
    };
    /**
     * @return {?}
     */
    IonicFrameworkComponent.prototype.updateTitle = /**
     * @return {?}
     */
    function () {
        this.widgetLayoutNode.options.title = this.jsf.parseText(this.dynamicTitle, this.jsf.getFormControlValue(this), this.jsf.getFormControlGroup(this).value, this.dataIndex[this.dataIndex.length - 1]);
    };
    /**
     * @return {?}
     */
    IonicFrameworkComponent.prototype.removeItem = /**
     * @return {?}
     */
    function () {
        this.jsf.removeItem(this);
    };
    IonicFrameworkComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ionic-framework',
                    template: "\n    <div\n      [orderable]=\"isOrderable\"\n      [dataIndex]=\"dataIndex\"\n      [layoutIndex]=\"layoutIndex\"\n      [layoutNode]=\"widgetLayoutNode\"\n    >\n      <button *ngIf=\"showRemoveButton\" class=\"close-button\" ion-button (click)=\"removeItem()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </button>\n\n      <select-widget-widget\n        [dataIndex]=\"dataIndex\"\n        [layoutIndex]=\"layoutIndex\"\n        [layoutNode]=\"widgetLayoutNode\">\n      </select-widget-widget>\n    </div>\n\n    <div class=\"spacer\" *ngIf=\"widgetLayoutNode?.arrayItem && widgetLayoutNode?.type !== '$ref'\">\n    </div>",
                },] },
    ];
    /** @nocollapse */
    IonicFrameworkComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef, },
        { type: angular2JsonSchemaForm.JsonSchemaFormService, },
    ]; };
    IonicFrameworkComponent.propDecorators = {
        "layoutNode": [{ type: core.Input },],
        "layoutIndex": [{ type: core.Input },],
        "dataIndex": [{ type: core.Input },],
    };
    return IonicFrameworkComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IonicTextareaComponent = (function () {
    function IonicTextareaComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    /**
     * @return {?}
     */
    IonicTextareaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    IonicTextareaComponent.prototype.updateValue = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!!this.options.onChange) {
            this.options.onChange(this.controlValue, this);
        }
        this.options.showErrors = true;
        this.jsf.updateValue(this, event.target.value);
    };
    IonicTextareaComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'textarea-widget',
                    template: "<ion-item [color]=\"options?.ionic?.color\" [attr.no-lines]=\"options?.ionic?.noLines ? '' : null\"> <ion-label *ngIf=\"options?.title\" [attr.for]=\"'control' + layoutNode?._id\" [ngClass]=\"options?.labelHtmlClass || ''\" [style.display]=\"options?.notitle ? 'none' : ''\" [innerHTML]=\"options?.title\" stacked > </ion-label> <ion-textarea [formControl]=\"formControl\" [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\" [attr.maxlength]=\"options?.maxLength\" [attr.minlength]=\"options?.minLength\" [attr.pattern]=\"options?.pattern\" [attr.placeholder]=\"options?.placeholder\" [readonly]=\"options?.readonly\" [attr.required]=\"options?.required\" [ngClass]=\"options?.fieldHtmlClass || ''\" [id]=\"'control' + layoutNode?._id\" (ionBlur)=\"updateValue($event)\" > </ion-textarea> </ion-item> <ion-item *ngIf=\"options?.showErrors && options?.errorMessage\"> <p [innerHTML]=\"options?.errorMessage\"></p> </ion-item> ",
                },] },
    ];
    /** @nocollapse */
    IonicTextareaComponent.ctorParameters = function () { return [
        { type: angular2JsonSchemaForm.JsonSchemaFormService, },
    ]; };
    IonicTextareaComponent.propDecorators = {
        "layoutNode": [{ type: core.Input },],
        "layoutIndex": [{ type: core.Input },],
        "dataIndex": [{ type: core.Input },],
    };
    return IonicTextareaComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IonicSelectComponent = (function () {
    function IonicSelectComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.selectList = [];
        this.isArray = angular2JsonSchemaForm.isArray;
    }
    /**
     * @return {?}
     */
    IonicSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.options = this.layoutNode.options || {};
        this.selectList = angular2JsonSchemaForm.buildTitleMap(this.options.titleMap || this.options.enumNames, this.options.enum, !!this.options.required, !!this.options.flatList);
        this.selectList.splice(this.selectList.findIndex(function (i) { return i.value === null; }), 1);
        this.jsf.initializeControl(this);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    IonicSelectComponent.prototype.updateValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!!this.options.onChange) {
            this.options.onChange(this.controlValue, this);
        }
        this.options.showErrors = true;
        this.jsf.updateValue(this, value);
    };
    IonicSelectComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'select-widget',
                    template: "<ion-item [color]=\"options?.ionic?.color\" [attr.no-lines]=\"options?.ionic?.noLines ? '' : null\"> <ion-label *ngIf=\"options?.title\" [attr.for]=\"'control' + layoutNode?._id\" [ngClass]=\"options?.labelHtmlClass || ''\" [style.display]=\"options?.notitle ? 'none' : ''\" [innerHTML]=\"options?.title\" stacked > </ion-label> <ion-select #item [(ngModel)]=\"controlValue\" (ionChange)=\"updateValue(item.value)\"> <ion-option *ngFor=\"let selectItem of selectList\" [selected]=\"selectItem?.value === controlValue\" [value]=\"selectItem?.value\"> <span [innerHTML]=\"selectItem?.name\"></span> </ion-option> </ion-select> </ion-item> <ion-item *ngIf=\"options?.showErrors && options?.errorMessage\"> <p [innerHTML]=\"options?.errorMessage\"></p> </ion-item> ",
                },] },
    ];
    /** @nocollapse */
    IonicSelectComponent.ctorParameters = function () { return [
        { type: angular2JsonSchemaForm.JsonSchemaFormService, },
    ]; };
    IonicSelectComponent.propDecorators = {
        "layoutNode": [{ type: core.Input },],
        "layoutIndex": [{ type: core.Input },],
        "dataIndex": [{ type: core.Input },],
    };
    return IonicSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IonicTabsComponent = (function () {
    function IonicTabsComponent(jsf) {
        this.jsf = jsf;
        this.selectedItem = 0;
        this.showAddTab = true;
    }
    /**
     * @return {?}
     */
    IonicTabsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.options = this.layoutNode.options || {};
        this.itemCount = this.layoutNode.items.length - 1;
        this.updateControl();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    IonicTabsComponent.prototype.select = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.layoutNode.items[index].type === '$ref') {
            this.itemCount = this.layoutNode.items.length;
            this.jsf.addItem({
                layoutNode: this.layoutNode.items[index],
                layoutIndex: this.layoutIndex.concat(index),
                dataIndex: this.dataIndex.concat(index)
            });
            this.updateControl();
        }
        
        this.selectedItem = index;
    };
    /**
     * @return {?}
     */
    IonicTabsComponent.prototype.updateControl = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ lastItem = this.layoutNode.items[this.layoutNode.items.length - 1];
        if (lastItem.type === '$ref' &&
            this.itemCount >= (lastItem.options.maxItems || 1000)) {
            this.showAddTab = false;
        }
    };
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    IonicTabsComponent.prototype.setTabTitle = /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (item, index) {
        return this.jsf.setArrayItemTitle(this, item, index);
    };
    IonicTabsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ionic-tabs-widget',
                    template: "<ion-segment> <ion-segment-button *ngFor=\"let item of layoutNode?.items; let i = index\" (click)=\"select(i)\" [ngClass]=\" 'segment-button' +' '+ (selectedItem === i ? ('segment-activated' + ' ' + options?.activeClass + ' ' + options?.style?.selected) : (' ' + options?.style?.unselected))\" data-tabs> <a *ngIf=\"showAddTab || item.type !== '$ref'\" [innerHTML]=\"setTabTitle(item, i)\"></a> </ion-segment-button> </ion-segment> <div *ngFor=\"let layoutItem of layoutNode?.items; let i = index\" [ngClass]=\"options?.htmlClass || ''\"> <select-framework-widget *ngIf=\"selectedItem === i\" [ngClass]=\"(options?.fieldHtmlClass || '') + ' ' + (options?.activeClass || '') + ' ' + (options?.style?.selected || '')\" [dataIndex]=\"layoutNode?.dataType === 'array' ? (dataIndex || []).concat(i) : dataIndex\" [layoutIndex]=\"(layoutIndex || []).concat(i)\" [layoutNode]=\"layoutItem\"></select-framework-widget> </div>",
                },] },
    ];
    /** @nocollapse */
    IonicTabsComponent.ctorParameters = function () { return [
        { type: angular2JsonSchemaForm.JsonSchemaFormService, },
    ]; };
    IonicTabsComponent.propDecorators = {
        "layoutNode": [{ type: core.Input },],
        "layoutIndex": [{ type: core.Input },],
        "dataIndex": [{ type: core.Input },],
    };
    return IonicTabsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IonicToggleComponent = (function () {
    function IonicToggleComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.trueValue = true;
        this.falseValue = false;
    }
    /**
     * @return {?}
     */
    IonicToggleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.options = this.layoutNode.options || {};
        console.log(this.options);
        this.jsf.initializeControl(this);
        if (this.controlValue === null || this.controlValue === undefined) {
            this.controlValue = false;
            this.jsf.updateValue(this, this.falseValue);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    IonicToggleComponent.prototype.updateValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!!this.options.onChange) {
            this.options.onChange(this.controlValue, this);
        }
        this.options.showErrors = true;
        this.jsf.updateValue(this, value ? this.trueValue : this.falseValue);
    };
    IonicToggleComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'toggle-widget',
                    template: "<ion-item [color]=\"options?.ionic?.color\" [attr.no-lines]=\"options?.ionic?.noLines ? '' : null\"> <ion-label *ngIf=\"options?.title\" [attr.for]=\"'control' + layoutNode?._id\" [ngClass]=\"options?.labelHtmlClass || ''\" [style.display]=\"options?.notitle ? 'none' : ''\" [innerHTML]=\"options?.title\" > </ion-label> <ion-toggle [(ngModel)]=\"controlValue\" [disabled]=\"controlDisabled\" (ionChange)=\"updateValue($event.value)\" [id]=\"'control' + layoutNode?._id\" > </ion-toggle> </ion-item> <ion-item *ngIf=\"options?.showErrors && options?.errorMessage\"> <p [innerHTML]=\"options?.errorMessage\"></p> </ion-item> ",
                },] },
    ];
    /** @nocollapse */
    IonicToggleComponent.ctorParameters = function () { return [
        { type: angular2JsonSchemaForm.JsonSchemaFormService, },
    ]; };
    IonicToggleComponent.propDecorators = {
        "layoutNode": [{ type: core.Input },],
        "layoutIndex": [{ type: core.Input },],
        "dataIndex": [{ type: core.Input },],
    };
    return IonicToggleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IonicSectionComponent = (function () {
    function IonicSectionComponent(jsf) {
        this.jsf = jsf;
        this.expanded = true;
    }
    /**
     * @return {?}
     */
    IonicSectionComponent.prototype.sectionTitle = /**
     * @return {?}
     */
    function () {
        return this.options.notitle ? null : this.jsf.setItemTitle(this);
    };
    /**
     * @return {?}
     */
    IonicSectionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.jsf.initializeControl(this);
        this.options = this.layoutNode.options || {};
        this.expanded = typeof this.options.expanded === 'boolean' ?
            this.options.expanded : !this.options.expandable;
        switch (this.layoutNode.type) {
            case 'fieldset':
            case 'array':
            case 'tab':
            case 'advancedfieldset':
            case 'authfieldset':
            case 'optionfieldset':
            case 'selectfieldset':
                this.containerType = 'fieldset';
                break;
            default:
                // 'div', 'flex', 'section', 'conditional', 'actions', 'tagsinput'
                this.containerType = 'div';
                break;
        }
    };
    /**
     * @return {?}
     */
    IonicSectionComponent.prototype.toggleExpanded = /**
     * @return {?}
     */
    function () {
        if (this.options.expandable) {
            this.expanded = !this.expanded;
        }
    };
    IonicSectionComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ionic-section-widget',
                    template: "<ion-list-header *ngIf=\"sectionTitle()\" [ngClass]=\"options?.labelHtmlClass || ''\" [innerHTML]=\"sectionTitle()\" [color]=\"options?.ionic?.color\" [attr.no-lines]=\"options?.ionic?.noLines ? '' : null\"> </ion-list-header> <ion-item [color]=\"options?.ionic?.color\" [attr.no-lines]=\"options?.ionic?.noLines ? '' : null\"> <ion-list *ngIf=\"containerType === 'div'\" [ngClass]=\"options?.htmlClass || ''\" [color]=\"options?.ionic?.color\" [attr.no-lines]=\"options?.ionic?.noLines ? '' : null\"> <ionic-root-widget [dataIndex]=\"dataIndex\" [layout]=\"layoutNode.items\" [layoutIndex]=\"layoutIndex\" [isOrderable]=\"options?.orderable\"> </ionic-root-widget> </ion-list> <ion-list *ngIf=\"containerType === 'fieldset'\" [ngClass]=\"options?.htmlClass || ''\" [color]=\"options?.ionic?.color\" [attr.no-lines]=\"options?.ionic?.noLines ? '' : null\"> <div *ngIf=\"options?.messageLocation !== 'bottom'\"> <p *ngIf=\"options?.description\" class=\"help-block\" [ngClass]=\"options?.labelHelpBlockClass || ''\" [innerHTML]=\"options?.description\"> </p> </div> <ionic-root-widget [dataIndex]=\"dataIndex\" [layout]=\"layoutNode.items\" [layoutIndex]=\"layoutIndex\" [isOrderable]=\"options?.orderable\" > </ionic-root-widget> <div *ngIf=\"options?.messageLocation === 'bottom'\"> <p *ngIf=\"options?.description\" class=\"help-block\" [ngClass]=\"options?.labelHelpBlockClass || ''\" [innerHTML]=\"options?.description\" > </p> </div> </ion-list> </ion-item> ",
                    styles: ["\n    .legend { font-weight: bold; }\n    .expandable > legend:before, .expandable > label:before { content: '\u25B6'; padding-right: .3em; }\n    .expanded > legend:before, .expanded > label:before { content: '\u25BC'; padding-right: .2em; }\n  "],
                },] },
    ];
    /** @nocollapse */
    IonicSectionComponent.ctorParameters = function () { return [
        { type: angular2JsonSchemaForm.JsonSchemaFormService, },
    ]; };
    IonicSectionComponent.propDecorators = {
        "layoutNode": [{ type: core.Input },],
        "layoutIndex": [{ type: core.Input },],
        "dataIndex": [{ type: core.Input },],
    };
    return IonicSectionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IonicRootComponent = (function () {
    function IonicRootComponent(jsf) {
        this.jsf = jsf;
        this.isFlexItem = false;
    }
    /**
     * @param {?} layoutItem
     * @return {?}
     */
    IonicRootComponent.prototype.getSectionTitle = /**
     * @param {?} layoutItem
     * @return {?}
     */
    function (layoutItem) {
        try {
            if (layoutItem.arrayItem &&
                layoutItem.type !== '$ref' &&
                layoutItem.arrayItemType === 'list') {
                var /** @type {?} */ propName = layoutItem.dataPointer.replace(/-/g, '').replace(/\//g, '');
                var /** @type {?} */ prop = this.jsf.schema.properties[propName];
                if (prop && prop.items && !prop.items.notitle) {
                    return prop.items.title;
                }
            }
            return false;
        }
        catch (/** @type {?} */ e) {
            return false;
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    IonicRootComponent.prototype.isDraggable = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        return node.arrayItem && node.type !== '$ref' &&
            node.arrayItemType === 'list' && this.isOrderable !== false;
    };
    /**
     * @param {?} layoutNode
     * @return {?}
     */
    IonicRootComponent.prototype.showWidget = /**
     * @param {?} layoutNode
     * @return {?}
     */
    function (layoutNode) {
        return this.jsf.evaluateCondition(layoutNode, this.dataIndex);
    };
    IonicRootComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ionic-root-widget',
                    template: "<div *ngFor=\"let layoutItem of layout; let i = index\" [style.order]=\"(layoutItem.options || {}).order\"> <h5 *ngIf=\"getSectionTitle(layoutItem)\" class=\"array-item-title\">{{getSectionTitle(layoutItem) + ' ' + (i+1)}}</h5> <div [dataIndex]=\"layoutItem?.arrayItem ? (dataIndex || []).concat(i) : (dataIndex || [])\" [layoutIndex]=\"(layoutIndex || []).concat(i)\" [layoutNode]=\"layoutItem\" [orderable]=\"isDraggable(layoutItem)\"> <select-framework-widget *ngIf=\"showWidget(layoutItem)\" [dataIndex]=\"layoutItem?.arrayItem ? (dataIndex || []).concat(i) : (dataIndex || [])\" [layoutIndex]=\"(layoutIndex || []).concat(i)\" [layoutNode]=\"layoutItem\"></select-framework-widget> </div> </div>"
                },] },
    ];
    /** @nocollapse */
    IonicRootComponent.ctorParameters = function () { return [
        { type: angular2JsonSchemaForm.JsonSchemaFormService, },
    ]; };
    IonicRootComponent.propDecorators = {
        "dataIndex": [{ type: core.Input },],
        "layoutIndex": [{ type: core.Input },],
        "layout": [{ type: core.Input },],
        "isOrderable": [{ type: core.Input },],
        "isFlexItem": [{ type: core.Input },],
    };
    return IonicRootComponent;
}());

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IonicFramework = (function (_super) {
    __extends(IonicFramework, _super);
    function IonicFramework() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'ionic';
        _this.framework = IonicFrameworkComponent;
        _this.stylesheets = [];
        _this.widgets = {
            'root': IonicRootComponent,
            'section': IonicSectionComponent,
            'button': IonicButtonComponent,
            'checkbox': IonicCheckboxComponent,
            'toggle': IonicToggleComponent,
            'select': IonicSelectComponent,
            'text': IonicInputComponent,
            'number': IonicInputComponent,
            'textarea': IonicTextareaComponent,
            'tabs': IonicTabsComponent,
            'submit': 'button'
        };
        return _this;
    }
    IonicFramework.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    IonicFramework.ctorParameters = function () { return []; };
    return IonicFramework;
}(angular2JsonSchemaForm.Framework));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var IONIC_FRAMEWORK_COMPONENTS = [
    IonicButtonComponent,
    IonicInputComponent,
    IonicCheckboxComponent,
    IonicTextareaComponent,
    IonicSelectComponent,
    IonicToggleComponent,
    IonicFrameworkComponent,
    IonicSectionComponent,
    IonicTabsComponent,
    IonicRootComponent
];
var IonicFrameworkModule = (function () {
    function IonicFrameworkModule() {
    }
    /**
     * @return {?}
     */
    IonicFrameworkModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: IonicFrameworkModule,
            providers: [
                { provide: angular2JsonSchemaForm.Framework, useClass: IonicFramework, multi: true }
            ]
        };
    };
    IonicFrameworkModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        ionicAngular.IonicModule,
                        angular2JsonSchemaForm.WidgetLibraryModule,
                    ],
                    declarations: IONIC_FRAMEWORK_COMPONENTS.slice(),
                    exports: IONIC_FRAMEWORK_COMPONENTS.slice(),
                    entryComponents: IONIC_FRAMEWORK_COMPONENTS.slice()
                },] },
    ];
    /** @nocollapse */
    IonicFrameworkModule.ctorParameters = function () { return []; };
    return IonicFrameworkModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

exports.IonicButtonComponent = IonicButtonComponent;
exports.IonicInputComponent = IonicInputComponent;
exports.IonicCheckboxComponent = IonicCheckboxComponent;
exports.IonicFrameworkComponent = IonicFrameworkComponent;
exports.IonicTextareaComponent = IonicTextareaComponent;
exports.IonicSelectComponent = IonicSelectComponent;
exports.IonicTabsComponent = IonicTabsComponent;
exports.IonicToggleComponent = IonicToggleComponent;
exports.IonicSectionComponent = IonicSectionComponent;
exports.IonicRootComponent = IonicRootComponent;
exports.IonicFrameworkModule = IonicFrameworkModule;
exports.IONIC_FRAMEWORK_COMPONENTS = IONIC_FRAMEWORK_COMPONENTS;
exports.IonicFramework = IonicFramework;

Object.defineProperty(exports, '__esModule', { value: true });

})));
