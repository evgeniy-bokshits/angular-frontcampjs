import { NgModule } from '@angular/core';
import { CreatedByMePipe } from './created-by-me.pipe';
@NgModule({
    imports:        [],
    declarations:   [CreatedByMePipe],
    exports:        [CreatedByMePipe],
})
export class CreatedByMePipeModule {

  static forRoot() {
    return {
        ngModule: CreatedByMePipeModule,
        providers: [],
    };
 }
}
