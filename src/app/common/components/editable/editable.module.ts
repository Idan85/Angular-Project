import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { EditableInputComponent } from './editable-input/editable-input.component';
import { EditableSelectComponent } from './editable-select/editable-select.component';

@NgModule ({

    imports: [

        CommonModule,
        FormsModule
    ],

    exports: [

    EditableInputComponent,

    ],

    declarations: [

    EditableInputComponent,

    EditableSelectComponent,

    ]
})

export class EditableModule {}
