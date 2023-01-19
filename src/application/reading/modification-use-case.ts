/**
 * This a port in hexagonal architecture
 * More specifically known as inbound port | driving port | primary port
 * The adapters will implements and use it from infrastructure layer
 * Also those adapters known as inbound adapter | driven adapter | primary adapter
 *
 * This includes some of reading modification operations
 * Other reading operations can be found in other interfaces,to maintain Interface segregation (SOLID)
 */

interface ModificationUseCase {

    addReading(): void;

}

export default ModificationUseCase;

