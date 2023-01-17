// ANGULAR IMPORTS
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// DATA IMPORTS
import { tags } from 'src/app/helper/data';


/**
 * This component for selecting tags for Projects or Tasks.
 */

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {
  // INTERACTION
  @Input() selectedTags: string[];
  @Output() selectedTagsChanged = new EventEmitter<string[]>();


  // DATA
  tagStates = tags.map(tag => ({ tag, checked: false }));


  // EVENTS
  tagsChanged() {
    this.selectedTagsChanged.emit(this.tagStates
      .filter(tagState => tagState.checked)
      .map(tagState => tagState.tag)
    );
  }
  
  
  ngOnInit(): void {
    this.selectedTags.forEach(selectedTag => {
      let tagState = this.tagStates.find(tag => tag.tag === selectedTag);

      if (tagState) {
        tagState.checked = true;
      }
    });
  }
}
