import Mark from 'mark.js';

export class MarkjsHighlight {
	static mark(
		elem: string | HTMLElement,
		keyword: string,
		options: Mark.MarkOptions,
	): void {
		let markInstance = new Mark(elem).mark(keyword, options);
		console.log(markInstance);
	}
}
