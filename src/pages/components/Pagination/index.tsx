import { ListPage } from "types/list";
import './responsive.css';

type Props = {
    page: ListPage,
    onPageChange: Function;
};

const Pagination = ({ page, onPageChange }: Props) => {
    return (
        <div className="pagination-wrapper">
            <div className="pagination-container">
                <nav>
                    <ul className="pagination">
                        <li className={ `page-item ${page.first ? 'disabled' : ''}` }>
                            <button
                                className="page-link"
                                onClick={ () => onPageChange(page.number - 1) }
                                disabled={ page.first }
                                aria-label="Página anterior"
                            >
                                Anterior
                            </button>
                        </li>
                        <li className="page-item active">
                            <span className="page-link current-page" aria-current="page">
                                { page.number + 1 }
                            </span>
                        </li>
                        <li className={ `page-item ${page.last ? 'disabled' : ''}` }>
                            <button
                                className="page-link"
                                onClick={ () => onPageChange(page.number + 1) }
                                disabled={ page.last }
                                aria-label="Próxima página"
                            >
                                Próxima
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="pagination-info">
                Página { page.number + 1 } de { page.totalPages }
                { page.totalElements > 0 && (
                    <span> • { page.totalElements } itens total</span>
                ) }
            </div>
        </div>
    );
};

export default Pagination;