// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// PRIMENG MODULES
import { ButtonModule as PrimeNG_ButtonModule } from 'primeng/button';
import { ToolbarModule as PrimeNG_ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule as PrimeNG_SplitButton } from 'primeng/splitbutton';
import { CardModule as PrimeNG_CardModule } from 'primeng/card';
import { TagModule as PrimeNG_TagModule } from 'primeng/tag';
import { PanelModule as PrimeNG_PanelModule } from 'primeng/panel';
import { DividerModule as PrimeNG_DividerModule } from 'primeng/divider';
import { DataViewModule as PrimeNG_DataViewModule } from 'primeng/dataview';
import { ChartModule as PrimeNG_ChartModule } from 'primeng/chart';
import { InputTextModule as PrimeNG_InputTextModule } from 'primeng/inputtext';
import { DropdownModule as PrimeNG_DropdownModule } from 'primeng/dropdown';
import { ToggleButtonModule as PrimeNG_ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextareaModule as PrimeNG_InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule as PrimeNG_DialogModule } from 'primeng/dialog';
import { TooltipModule as PrimeNG_TooltipModule } from 'primeng/tooltip';
import { ConfirmPopupModule as PrimeNG_ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService as PrimeNG_ConfirmationService } from 'primeng/api';

// CUSTOM COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';
import { ProjectListItemComponent } from './projects/project-list-item/project-list-item.component';
import { TaskListItemComponent } from './tasks/task-list-item/task-list-item.component';
import { StatusIndicatorComponent } from './common/status-indicator/status-indicator.component';
import { ProjectPageComponent } from './projects/project-page/project-page.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { UserComponent } from './user/user.component';
import { TaskPageComponent } from './tasks/task-page/task-page.component';
import { TagListComponent } from './common/tag-list/tag-list.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { NewItemModalComponent } from './common/new-item-modal/new-item-modal.component';

// CUSTOM SERVICES
import { DataService } from './data.service';
import { UserService } from './user/user.service';
import { AuthGuard } from './auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    HomeComponent,
    ProjectListItemComponent,
    TasksComponent,
    TaskListItemComponent,
    StatusIndicatorComponent,
    ProjectPageComponent,
    TaskListComponent,
    UserComponent,
    TaskPageComponent,
    TagListComponent,
    NewItemModalComponent,
    ProjectEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    PrimeNG_ButtonModule,
    PrimeNG_ToolbarModule,
    PrimeNG_SplitButton,
    PrimeNG_CardModule,
    PrimeNG_TagModule,
    PrimeNG_PanelModule,
    PrimeNG_DividerModule,
    PrimeNG_DataViewModule,
    PrimeNG_ChartModule,
    PrimeNG_InputTextModule,
    PrimeNG_DropdownModule,
    PrimeNG_ToggleButtonModule,
    PrimeNG_InputTextareaModule,
    PrimeNG_DialogModule,
    PrimeNG_TooltipModule,
    PrimeNG_ConfirmPopupModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'projects/:projectId', component: ProjectPageComponent },
      { path: 'projects/:projectId/edit', component: ProjectEditComponent },
      { path: 'projects/:projectId/tasks/:taskId', component: TaskPageComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'user', component: UserComponent, canActivate: [AuthGuard] }
    ])
  ],
  providers: [DataService, UserService, AuthGuard, PrimeNG_ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
