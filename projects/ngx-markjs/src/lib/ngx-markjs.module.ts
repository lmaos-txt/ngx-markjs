import { NgModule } from '@angular/core';
import { MarkjsHighlightDirective } from './markjs-highlight.directive';
import { MarkjsHighlight } from './markjs-highlight';
import { ModuleWithProviders } from '@angular/core';

@NgModule({
	declarations: [MarkjsHighlightDirective],
	imports: [],
	exports: [MarkjsHighlightDirective],
})
export class NgxMarkjsModule {}
