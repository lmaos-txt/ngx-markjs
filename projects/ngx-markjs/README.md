# ngx-markjs

This is a Angular 13 Wrapper for [Mark.js](https://markjs.io/).

## How to Use

Install the NPM package:

> $ npm i @lmaos/ngx-markjs

Add the following to your `tsconfig`

```json
{
	...
  	"compilerOptions": {
		...
		"allowSyntheticDefaultImports": true,
		...
	}
	...
}
```

Import the Module into your project:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMarkjsModule } from '@lmaos/ngx-markjs'; // Add this

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgxMarkjsModule, // Add this
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
```

## Usage

start Using the library via implementing the directory:

```typescript
<div class="card-container"
markjsHighlight //add the directive to your div
[markjsConfig]={}
[markjsHighlight]="filteredText">Test Text</div>
```

Find a minimal example at the [demo Repository](https://github.com/lmaos-txt/ngx-markjs-demo).
