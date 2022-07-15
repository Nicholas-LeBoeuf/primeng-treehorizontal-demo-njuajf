import {Component,OnInit} from '@angular/core';
import {NodeService} from './nodeservice';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
    files: TreeNode[];

    selectedFile: TreeNode;
    
    constructor(private nodeService: NodeService) { }

    ngOnInit() {
        this.nodeService.getFiles().then(files => {
            this.files = [{
                label: 'China Farmers priorities are performance focused as evidenced by Harvest uptime and speed of payback rated #1 VD',
                children: files
            }];
        });
    }
}
