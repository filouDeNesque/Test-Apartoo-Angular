import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { _MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-friends-tab',
  templateUrl: './friends-tab.component.html',
  styleUrls: ['./friends-tab.component.css'],
})
export class FriendsTabComponent implements OnInit {
  Schtroumpfs!: any[];
  displayedColumns: string[] = ['name', 'role', 'friend'];
  dataSource!: _MatTableDataSource<any>;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngOnInit(): void {
    this.Schtroumpfs = [
      {
        name: 'Polo',
        role: 'Sorcier',
        friend: 1234,
      },
      {
        name: 'Germaine',
        role: 'Guerrier',
        friend: 1234,
      },
    ];
    this.dataSource = new _MatTableDataSource(this.Schtroumpfs);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  addFriend() {
    console.log('ajout amis');
    
  }

  deleteFriend() {
    console.log('suppression amis');
  }
}
