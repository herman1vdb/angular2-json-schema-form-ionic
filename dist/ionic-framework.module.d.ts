import { ModuleWithProviders } from '@angular/core';
import { IonicButtonComponent } from './widgets/button/ionic-button.component';
import { IonicInputComponent } from './widgets/input/ionic-input.component';
import { IonicSelectComponent } from './widgets/select/ionic-select.component';
import { IonicCheckboxComponent } from './widgets/checkbox/ionic-checkbox.component';
import { IonicTextareaComponent } from './widgets/textarea/ionic-textarea.component';
import { IonicToggleComponent } from './widgets/toggle/ionic-toggle.component';
import { IonicFrameworkComponent } from './ionic-framework.component';
import { IonicTabsComponent } from './widgets/tabs/ionic-tabs.component';
import { IonicSectionComponent } from './widgets/section/ionic-section.component';
import { IonicRootComponent } from './widgets/root/ionic-root.component';
export declare const IONIC_FRAMEWORK_COMPONENTS: (typeof IonicButtonComponent | typeof IonicInputComponent | typeof IonicCheckboxComponent | typeof IonicFrameworkComponent | typeof IonicTextareaComponent | typeof IonicSelectComponent | typeof IonicTabsComponent | typeof IonicToggleComponent | typeof IonicSectionComponent | typeof IonicRootComponent)[];
export declare class IonicFrameworkModule {
    static forRoot(): ModuleWithProviders;
}
