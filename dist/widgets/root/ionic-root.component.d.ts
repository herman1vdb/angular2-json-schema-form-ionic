import { JsonSchemaFormService } from 'angular2-json-schema-form';
export declare class IonicRootComponent {
    private jsf;
    options: any;
    dataIndex: number[];
    layoutIndex: number[];
    layout: any[];
    isOrderable: boolean;
    isFlexItem: boolean;
    constructor(jsf: JsonSchemaFormService);
    getSectionTitle(layoutItem: any): any;
    isDraggable(node: any): boolean;
    showWidget(layoutNode: any): boolean;
}
