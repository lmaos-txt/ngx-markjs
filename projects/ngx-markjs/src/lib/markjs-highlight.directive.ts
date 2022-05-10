import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { Directive, Input } from '@angular/core';
import Mark from 'mark.js';

@Directive({
	selector: '[markjsHighlight]',
})
export class MarkjsHighlightDirective implements OnChanges {
	@Input() markjsHighlight: string = '';
	@Input() markjsConfig = {};

	markInstance: any;

	constructor(private contentElementRef: ElementRef) {
		this.markInstance = new Mark(this.contentElementRef.nativeElement);
	}
	ngOnChanges(changes: SimpleChanges): void {
		this.highlightText();
	}

	highlightText() {
		this.markjsHighlight = this.markjsHighlight || '';
		this.markInstance.unmark({
			done: () => {
				this.markInstance.mark(this.markjsHighlight, this.markjsConfig);
			},
		});
	}
}
