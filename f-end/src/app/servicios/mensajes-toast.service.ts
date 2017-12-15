import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Injectable()
export class MensajesToastService {
    public _toastr: ToastsManager;

    constructor(vRef: ViewContainerRef) {
        this._toastr.setRootViewContainerRef(vRef);
    }
}

