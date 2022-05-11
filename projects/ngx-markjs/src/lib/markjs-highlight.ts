import Mark from 'mark.js';

export class MarkjsHighlight {
	static mark(
		elem: string | HTMLElement | readonly HTMLElement[] | NodeList,
		keyword: string,
		options?: Mark.MarkOptions,
	): void {
		let markInstance = new Mark(elem);
		markInstance.mark(keyword, options);
	}

	static markRange(
		elem: string | HTMLElement | readonly HTMLElement[] | NodeList,
		ranges: Mark.Range[],
		options?: Mark.MarkOptions,
	) {
		let markInstance = new Mark(elem);
		markInstance.markRanges(ranges, options);
	}

	static markRegex(
		elem: string | HTMLElement | readonly HTMLElement[] | NodeList,
		regex: RegExp,
		options?: Mark.MarkOptions,
	) {
		let markInstance = new Mark(elem);
		markInstance.markRegExp(regex, options);
	}
	static unmark(
		elem: string | HTMLElement | readonly HTMLElement[] | NodeList,
	) {
		this.getCleanMark(elem);
	}

	private static getCleanMark(
		elem: string | HTMLElement | readonly HTMLElement[] | NodeList,
	): Mark {
		let mark = new Mark(elem);
		mark.unmark();
		return mark;
	}
}
