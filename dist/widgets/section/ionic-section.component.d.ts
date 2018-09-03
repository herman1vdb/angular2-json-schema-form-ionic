import { OnInit } from '@angular/core';
import { JsonSchemaFormService } from 'angular2-json-schema-form';
export declare class IonicSectionComponent implements OnInit {
    private jsf;
    options: any;
    expanded: boolean;
    containerType: string;
    layoutNode: any;
    layoutIndex: number[];
    dataIndex: number[];
    constructor(jsf: JsonSchemaFormService);
    sectionTitle(): string;
    ngOnInit(): void;
    toggleExpanded(): void;
}
