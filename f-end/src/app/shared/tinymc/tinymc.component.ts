import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-simple-tiny',
  templateUrl: 'tinymc.component.html'
})
export class TinyComponent implements AfterViewInit, OnDestroy, OnInit {
  @Input() public  elementId: String;
  @Output() public  onEditorKeyup = new EventEmitter<any>();
  @Input() public contenido: String;
  public editor;
  ngOnInit() {
  }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      languaje: 'es',
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.contenido = content;
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}

