import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupService } from 'src/app/services/meetup.service';
import { MeetupListComponent } from '../../meetups/meetup-list/meetup-list.component';

@Component({
  selector: 'app-all-meetups',
  standalone: true,
  templateUrl: './all-meetups.component.html',
  styleUrls: ['./all-meetups.component.scss'],
  imports: [CommonModule, MeetupListComponent],
})
export class AllMeetupsComponent implements OnInit {
  meetupService = inject(MeetupService);
  isLoading = true;

  ngOnInit(): void {
    this.meetupService.getMeetups().subscribe(() => {
      this.isLoading = false;
    });
  }
}
