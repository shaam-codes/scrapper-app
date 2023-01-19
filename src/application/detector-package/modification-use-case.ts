/**
 * This a port in hexagonal architecture
 * More specifically known as inbound port | driving port | primary port
 * The adapters will implements and use it from infrastructure layer
 * Also those adapters known as inbound adapter | driven adapter | primary adapter
 *
 * This includes some of detector package modification operations
 * Other detector package operations can be found in other interfaces,to maintain Interface segregation (SOLID)
 */

interface ModificationUseCase {

    createDetectorPackage(): void;

}

export default ModificationUseCase;

