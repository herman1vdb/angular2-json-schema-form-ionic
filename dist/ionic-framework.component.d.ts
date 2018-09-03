import { ChangeDetectorRef, OnChanges, OnInit } from '@angular/core';
import { JsonSchemaFormService } from 'angular2-json-schema-form';
export declare class IonicFrameworkComponent implements OnInit, OnChanges {
    private changeDetector;
    private jsf;
    frameworkInitialized: boolean;
    inputType: string;
    options: any;
    widgetLayoutNode: any;
    widgetOptions: any;
    formControl: any;
    parentArray: any;
    isOrderable: boolean;
    dynamicTitle: string;
    layoutNode: any;
    layoutIndex: number[];
    dataIndex: number[];
    constructor(changeDetector: ChangeDetectorRef, jsf: JsonSchemaFormService);
    readonly showRemoveButton: boolean;
    ngOnInit(): void;
    ngOnChanges(): void;
    initializeFramework(): void;
    updateTitle(): void;
    removeItem(): void;
}
