import { OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { JsonSchemaFormService, isArray } from 'angular2-json-schema-form';
export declare class IonicSelectComponent implements OnInit {
    private jsf;
    formControl: AbstractControl;
    controlName: string;
    controlValue: any;
    controlDisabled: boolean;
    boundControl: boolean;
    options: any;
    selectList: any[];
    isArray: typeof isArray;
    layoutNode: any;
    layoutIndex: number[];
    dataIndex: number[];
    constructor(jsf: JsonSchemaFormService);
    ngOnInit(): void;
    updateValue(value: any): void;
}
