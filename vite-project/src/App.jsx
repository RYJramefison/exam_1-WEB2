
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
    return (
        <div className="container mt-3">
            <div className="title text-center">
                <h1 className='text-danger'>Patrimoine</h1>
            </div>
            <div className='contain_personne mb-3'>
                <select className='form-control'>
                    <option>Sélectionner une personne</option>
                    <option value="personne1">Personne1</option>
                    <option value="personne2">Personne2</option>
                    <option value="personne3">Personne3</option>
                </select>
            </div>
            <div className='contain_possession_personne '>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Libelle</th>
                            <th>Valeur Initial</th>
                            <th>Date Début</th>
                            <th>Date Fin</th>
                            <th>Valeur Actuel</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Possession 1</td>
                        <td>1000</td>
                        <td>01/01/2024</td>
                        <td>01/01/2025</td>
                        <td>800</td>
                    </tr>
                    <tr>
                            <td>Possession 2</td>
                            <td>2000</td>
                            <td>01/01/2024</td>
                            <td>01/01/2026</td>
                            <td>1800</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='date_patrimoine mb-3 '>
                <input type="date" className='form-control'/>
            </div>
            <div className='text-center mt-3'>
                <button className='btn btn-secondary'>Appliquer</button>
            </div>
        </div>
    )
}