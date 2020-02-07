import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsArticle } from '../news-toolbar/news-toolbar.component';

@Component({
  selector: 'app-news-article-add',
  templateUrl: './news-article-add.component.html',
  styleUrls: ['./news-article-add.component.scss']
})
export class NewsArticleAddComponent implements OnInit {
  @Input() articles: NewsArticle[];
  @Input() articleToEdit: NewsArticle;
  @Input() isEdit: boolean;
  @Output() articlesValueChange = new EventEmitter();
  @Output() isAddArticleValueChange = new EventEmitter();
  addArticleReactiveForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const controls = this.addArticleReactiveForm.controls;

    if (this.addArticleReactiveForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      return;
    }
    this.articlesValueChange.emit(this.addArticleReactiveForm.value);
    console.log(this.addArticleReactiveForm.value);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.addArticleReactiveForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  getErrorAuthor() {
    return 'Author should not be empty';
  }

  private initForm() {
    this.addArticleReactiveForm = this.fb.group({
      title: [this.isEdit ? this.articleToEdit.title : '', [
        Validators.required,
        Validators.pattern(/[A-z]/)
      ]
      ],
      url: [this.isEdit ? this.articleToEdit.url : ''],
      publishAt: [this.isEdit ? this.articleToEdit.publishAt : ''],
      author: [this.isEdit ? this.articleToEdit.author : ''],
      description: [this.isEdit ? this.articleToEdit.description : ''],
      urlToImage: [this.isEdit ? this.articleToEdit.urlToImage : ''],
      content: [this.isEdit ? this.articleToEdit.content : '']
    });
  }
}
