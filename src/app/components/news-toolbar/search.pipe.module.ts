import { NgModule } from '@angular/core';
import { SearchPipe } from './search.pipe';
@NgModule({
    imports:        [],
    declarations:   [SearchPipe],
    exports:        [SearchPipe],
})
export class SearchPipeModule {

  static forRoot() {
    return {
        ngModule: SearchPipeModule,
        providers: [],
    };
 }
}
