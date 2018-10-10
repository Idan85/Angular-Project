import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

export class EditableComponent implements OnChanges {

  @Input () entity: any;

  @Input () set field ( entityField: any ) {

    this.entityField = entityField;

    this.setOriginValue();
  }

  @Input () className: string;

  @Input () type: string = 'text';

  @Input () style: any;

  @Output () entityUpdated = new EventEmitter;

  isActiveInput: boolean = false;

  public originEntityValue: any;

  public entityField: any;

  constructor() { }

  ngOnChanges() {

    this.setOriginValue ();

    this.isActiveInput = false;
  }

  updateEntity () {

  const entityValue =  this.entity [this.entityField];

  if ( entityValue !== this.originEntityValue ) {

    this.entityUpdated.emit ({[this.entityField]: this.entity [this.entityField]});

    this.setOriginValue ();

  }

    this.isActiveInput = false;
  }

  cancelUpdate () {

    this.isActiveInput = false;

    this.entity [ this.entityField ] = this.originEntityValue;
  }

  setOriginValue () {

    this.originEntityValue = this.entity [ this.entityField ];
  }

}