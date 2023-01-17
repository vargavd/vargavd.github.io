// ANGULAR IMPORTS
import { Component, Input } from '@angular/core';

// DATA TYPE IMPORT
import { TASK_STATUS } from 'src/app/helper/data';

/**
 * Displaying task status
 */

@Component({
  selector: 'app-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.scss']
})
export class StatusIndicatorComponent {
  // INPUT
  @Input() status: TASK_STATUS;
  @Input() colorLabel: boolean = false;

  // INFO GETTERS
  getStatus(separator: string = ' ') {
    return this.status.replace(/ /g, separator);
  }
  getColorLabelClass() {
    return this.colorLabel ? 'color-label' : '';
  }
  getIconClass() {
    if (this.status == TASK_STATUS.FINISHED) {
      return 'pi-check-square';
    }

    if (this.status == TASK_STATUS.IN_PROGRESS) {
      return 'pi-hourglass';
    }

    return 'pi-stop';
  }

}
