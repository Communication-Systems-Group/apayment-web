import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../models/user.model';

@Pipe({
          name: 'firstLastName'
      })
export class UserFirstLastNamePipe implements PipeTransform {

    transform(user: User): string {
        if (user.AnimalHusbandryDetailResult) {
            return user.AnimalHusbandryDetailResult.PostData.Name;
        }

        return user.firstname + ' ' + user.lastname;
    }

    private isEmpty(str: string): boolean {
        return (!str || 0 === str.length);
    }

}

