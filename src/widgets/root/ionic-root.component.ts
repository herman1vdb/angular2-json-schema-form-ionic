import { Component, Input, Host } from '@angular/core';
import { hasValue, JsonPointer, JsonSchemaFormService } from 'angular2-json-schema-form';

@Component({
  selector: 'ionic-root-widget',
  templateUrl: 'ionic-root.template.html'
})
export class IonicRootComponent {
  options: any;
  @Input() dataIndex: number[];
  @Input() layoutIndex: number[];
  @Input() layout: any[];
  @Input() isOrderable: boolean;
  @Input() isFlexItem = false;

  constructor(
    private jsf: JsonSchemaFormService
  ) {}

  getSectionTitle(layoutItem) {
    try {
      if (layoutItem.arrayItem &&
        layoutItem.type !== '$ref' &&
        layoutItem.arrayItemType === 'list') {
        let propName = layoutItem.dataPointer.replace(/-/g, '').replace(/\//g, '');
        let prop = this.jsf.schema.properties[propName];
        if (prop && prop.items && !prop.items.notitle) {
          return prop.items.title;
        }
      }
      return false;
    } catch (e) {
      return false;
    }
  }

  isDraggable(node: any): boolean {
    return node.arrayItem && node.type !== '$ref' &&
      node.arrayItemType === 'list' && this.isOrderable !== false;
  }

  showWidget(layoutNode: any): boolean {
    return this.jsf.evaluateCondition(layoutNode, this.dataIndex);
  }
}