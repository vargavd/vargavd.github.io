// ANGULAR IMPORTS
import { Component, OnInit } from '@angular/core';

// DATA IMPORTS
import { DEVELOPER_LEVEL, UserModel } from '../helper/data';

// SERVICE IMPORTS
import { UserService } from './user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  // helper - for displaying the enum options in the dropdown
  devLevels = Object.values(DEVELOPER_LEVEL).map(level => level.toString());

  // data model
  user: UserModel;

  // setter funcs
  devLevelSelected($event: { value: string }) {
    this.user.devLevel = DEVELOPER_LEVEL[$event.value.toUpperCase()];
  };

  // DOM events
  onSave() {
    this.userService.setUser(
      this.user.userName, 
      this.user.firstName, 
      this.user.lastName, 
      this.user.email, 
      this.user.devLevel, 
      this.user.about
    );
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = { ...this.userService.user };
  }

  

  
  
}
