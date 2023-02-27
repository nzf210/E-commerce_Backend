import { HasuraInsertEvent, HasuraUpdateEvent, TrackedHasuraEventHandler } from '@golevelup/nestjs-hasura';
import { Injectable } from '@nestjs/common';

interface User {
    id: string;
    first_name: string;
    last_name: string;
    level: string;
    id_akun: string;
    email: string;
}

@Injectable()
export class UserService {
    @TrackedHasuraEventHandler({
        triggerName: 'user-created',
        tableName: 'users',
        definition: { type: 'insert' },
    })

    handleUserCreated(evt: HasuraInsertEvent<User>) {
        console.log('A new user was created!');
        console.log('User info:', evt.event.data.new);
    }

    @TrackedHasuraEventHandler({
        triggerName: 'user-updated',
        tableName: 'users',
        definition: { type: 'update', columns: ['item_id', 'updated_at'] },
    })

    handleUserUpdated(evt: HasuraUpdateEvent<User>) {
        console.log('handleUserUpdated was called, due to user.email changing and Hasura sending us a webhook!');
        console.log('email was changed from', evt.event.data.old, 'to', evt.event.data.new);
    }
}
