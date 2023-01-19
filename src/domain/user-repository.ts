/**
 * This a port in hexagonal architecture
 * More specifically known as outbound port | driven port | secondary port
 * The adapters will implements and use it from infrastructure layer
 * Also those adapters known as outbound adapter | driven adapter | secondary port
 *
 * This includes some of User related database operations
 * Other User operations can be found in other interfaces,to maintain Interface segregation (SOLID)
 */

import User from './user';

interface UserRepository {

    createUser(user: User): void;

}

export default UserRepository;
