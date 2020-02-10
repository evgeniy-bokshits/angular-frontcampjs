import { NgModule } from '@angular/core';
import { SearchPipe } from './search.pipe';
import { CreatedByMePipe } from './created-by-me.pipe';
@NgModule({
    imports:        [],
    declarations:   [SearchPipe, CreatedByMePipe],
    exports:        [SearchPipe, CreatedByMePipe],
})
export class SearchPipeModule {

  static forRoot() {
    return {
        ngModule: SearchPipeModule,
        providers: [],
    };
 }
}
