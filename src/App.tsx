import * as React from 'react';
import Swal from 'sweetalert2';
import './style.css';

export default function App() {
  const chars1 = 'JKY';
  const chars2 = 'BIQV';
  const chars3 = 'CPXWS';

  function permutations(chars: string): string[] {
    const result: string[] = [];

    function permute(prefix: string, remainder: string) {
      if (remainder.length === 0) {
        result.push(prefix);
      } else {
        for (let i = 0; i < remainder.length; i++) {
          const newPrefix = prefix + remainder[i];
          const newRemainder = remainder.slice(0, i) + remainder.slice(i + 1);
          permute(newPrefix, newRemainder);
        }
      }
    }

    permute(' ', chars);
    Swal.fire({
      title: 'as combinações possiveis são',
      html: `${result} <br/> totalizando ${result.length} combinações`,
    });

    return result;
  }

  return (
    <div>
      <h1>Desafio 02</h1>

      <div>
        <div>
          <button onClick={() => permutations(chars1)}>Input1 = JKY</button>
        </div>
        <br />
        <div>
          <button onClick={() => permutations(chars2)}>Input2 = BIQV</button>
        </div>
        <br />
        <div>
          <button onClick={() => permutations(chars3)}>Input3 = CPXWS</button>
        </div>
        <br />
      </div>
    </div>
  );
}
