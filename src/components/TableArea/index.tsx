import * as C from './styles';
import { Item } from '../../types/Item'

type Props = {
    list: Item[]
}

export const TableArea = () => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categorias</C.TableHeadColumn>
                    <C.TableHeadColumn>Titulo</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=>(
                    <tr key={index}>
                    <td></td>
                    <td></td>
                    <td>{item.title}</td>
                    <td>{item.value}</td>
                </tr>
                ))}
            </tbody>
        </C.Table>
    );
}