/**
 * This a port in hexagonal architecture
 * More specifically known as inbound port | driving port | primary port
 * The adapters will implements and use it from infrastructure layer
 * Also those adapters known as inbound adapter | driven adapter | primary adapter
 *
 * This includes some of detector package retrival operations
 * Other detector package operations can be found in other interfaces,to maintain Interface segregation (SOLID)
 */


interface RetrivalUseCase {

    getDettectorPackage(): void;
}

export default RetrivalUseCase;
