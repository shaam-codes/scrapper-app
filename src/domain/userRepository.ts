/**
 * This Domain level port for user model
 * This need to be implements on the Infrastructture level
 */

interface UserRepository {

    createUser(user: User): void;

}

export default UserRepository;
