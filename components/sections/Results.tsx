import { Section } from '@/components/ui/Section';

const indicatorGroups = [
  {
    objective: 'Rentabilidad y eficiencia del gasto',
    strategy:
      'Organizar mejor los costos y vigilar de cerca la caja menor para que el negocio deje más utilidades.',
    rows: [
      {
        indicator: 'Margen de Utilidad',
        formula: '(Utilidad Neta / Ingresos Totales) * 100',
        unit: '%',
        years: ['12%', '15%', '20%', '25%'],
        responsible: 'Director financiero',
      },
      {
        indicator: 'Desviación del Presupuesto',
        formula: '(Gasto Real / Presupuesto Planeado) * 100',
        unit: '%',
        years: ['<5%', '<4%', '<3%', '<2%'],
        responsible: 'Director financiero',
      },
    ],
  },
  {
    objective: 'Posicionamiento de marca',
    strategy:
      'Crear alianzas con entidades como Cámaras de Comercio y hacer seguimiento comercial estricto para ganar clientes frente a la competencia.',
    rows: [
      {
        indicator: 'Clientes Nuevos',
        formula: 'Recuento anual de nuevas empresas PyME contratadas',
        unit: 'Cant.',
        years: ['4', '8', '12', '20'],
        responsible: 'Director financiero',
      },
      {
        indicator: 'Adquisición de Clientes',
        formula: '(Clientes Nuevos / Prospectos Totales) * 100',
        unit: '%',
        years: ['10%', '15%', '20%', '25%'],
        responsible: 'Dirección Comercial',
      },
    ],
  },
  {
    objective: 'Optimización de los tiempos de entrega',
    strategy:
      'Supervisar el trabajo técnico y usar inteligencia artificial para que los diagnósticos iniciales sean más rápidos.',
    rows: [
      {
        indicator: 'Desviación de Tiempo',
        formula: '(Tiempo Real / Tiempo Planeado)',
        unit: 'Ratio',
        years: ['0,8', '0,85', '0,9', '1'],
        responsible: 'Director de TI',
      },
      {
        indicator: 'Eficiencia de Diagnóstico Inicial',
        formula: '(Diagnósticos Automatizados / Diagnósticos Totales) * 100',
        unit: '%',
        years: ['70%', '80%', '90%', '100%'],
        responsible: 'Director de TI',
      },
    ],
  },
  {
    objective: 'Satisfacción y resultados',
    strategy:
      'Entregar tableros de control que muestren ahorros reales y dar soporte constante para que el cliente se sienta acompañado.',
    rows: [
      {
        indicator: 'Tasa de Recomendación',
        formula: '(Clientes que recomiendan / Clientes totales) * 100',
        unit: '%',
        years: ['80%', '85%', '90%', '95%'],
        responsible: 'Dirección Comercial',
      },
      {
        indicator: 'Índice de finalización de Proyectos',
        formula: '(Proyectos Finalizados con Éxito / Proyectos Totales) * 100',
        unit: '%',
        years: ['85%', '90%', '92%', '95%'],
        responsible: 'Dirección Comercial',
      },
    ],
  },
  {
    objective: 'Fortalecimiento del equipo de trabajo',
    strategy:
      'Capacitar constantemente al personal en temas de tecnología y datos, asegurando aprendizaje real.',
    rows: [
      {
        indicator: 'Horas de formación',
        formula: 'Sumatoria de horas de capacitación ejecutadas acumuladas',
        unit: 'Horas',
        years: ['40h', '50h', '60h', '80h'],
        responsible: 'Director de RRHH',
      },
      {
        indicator: 'Nivel de Capacitación',
        formula: '(Horas de capacitación ejecutadas / Horas planeadas) * 100',
        unit: '%',
        years: ['90%', '92%', '95%', '100%'],
        responsible: 'Director de RRHH',
      },
    ],
  },
];

const summary = [
  { label: 'Horizonte', value: '2027-2030' },
  { label: 'Objetivos', value: '5' },
  { label: 'Indicadores', value: '10' },
  { label: 'Enfoque', value: 'Medición' },
];

export function Results() {
  return (
    <Section
      id="resultados"
      eyebrow="Indicadores"
      title="Tablero estratégico de medición 2027-2030"
      description="Un sistema de indicadores permite conectar estrategia, operación y responsables concretos. Esta tabla organiza los objetivos de crecimiento con metas anuales y acciones asociadas."
    >
      <ul className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summary.map((item) => (
          <li
            key={item.label}
            className="rounded-card border border-forjex-border bg-forjex-surface p-5 text-center"
          >
            <div className="text-2xl font-bold text-forjex-ink">{item.value}</div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-forjex-green">
              {item.label}
            </div>
          </li>
        ))}
      </ul>

      <div className="relative left-1/2 w-[calc(100vw-2rem)] max-w-[1480px] -translate-x-1/2 overflow-hidden rounded-card border border-forjex-border bg-white shadow-card sm:w-[calc(100vw-3rem)] lg:w-[calc(100vw-4rem)]">
        <div className="overflow-x-auto overscroll-x-contain">
          <table className="w-full min-w-[1120px] table-fixed border-collapse text-left text-sm">
            <caption className="sr-only">
              Indicadores estratégicos de FORJEX Consulting proyectados entre 2027 y 2030.
            </caption>
            <thead>
              <tr className="bg-forjex-ink text-white">
                <th scope="col" rowSpan={2} className="w-[13%] border border-forjex-ink/30 px-4 py-3 align-bottom">
                  Objetivo
                </th>
                <th scope="col" rowSpan={2} className="w-[12%] border border-forjex-ink/30 px-4 py-3 align-bottom">
                  Indicador
                </th>
                <th scope="col" rowSpan={2} className="w-[15%] border border-forjex-ink/30 px-4 py-3 align-bottom">
                  Fórmula
                </th>
                <th scope="col" rowSpan={2} className="w-[7%] border border-forjex-ink/30 px-4 py-3 text-center align-bottom">
                  Unidad
                </th>
                <th scope="col" colSpan={4} className="border border-forjex-ink/30 px-4 py-2 text-center">
                  Años
                </th>
                <th scope="col" rowSpan={2} className="w-[18%] border border-forjex-ink/30 px-4 py-3 align-bottom">
                  Estrategia
                </th>
                <th scope="col" rowSpan={2} className="w-[11%] border border-forjex-ink/30 px-4 py-3 align-bottom">
                  Responsable
                </th>
              </tr>
              <tr className="bg-forjex-green text-white">
                {['2027', '2028', '2029', '2030'].map((year) => (
                  <th key={year} scope="col" className="border border-forjex-ink/30 px-4 py-2 text-center">
                    {year}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {indicatorGroups.map((group) =>
                group.rows.map((row, rowIndex) => (
                  <tr key={`${group.objective}-${row.indicator}`} className="even:bg-forjex-surface/60">
                    {rowIndex === 0 && (
                      <th
                        scope="rowgroup"
                        rowSpan={group.rows.length}
                        className="border border-forjex-border px-4 py-4 text-center font-semibold text-forjex-ink"
                      >
                        {group.objective}
                      </th>
                    )}
                    <td className="border border-forjex-border px-4 py-4 font-semibold text-forjex-ink">
                      {row.indicator}
                    </td>
                    <td className="border border-forjex-border px-4 py-4 text-xs leading-relaxed text-forjex-muted">
                      {row.formula}
                    </td>
                    <td className="border border-forjex-border px-4 py-4 text-center text-forjex-muted">
                      {row.unit}
                    </td>
                    {row.years.map((value, yearIndex) => (
                      <td
                        key={`${row.indicator}-${yearIndex}`}
                        className="border border-forjex-border px-4 py-4 text-center font-medium text-forjex-text"
                      >
                        {value}
                      </td>
                    ))}
                    {rowIndex === 0 && (
                      <td
                        rowSpan={group.rows.length}
                        className="border border-forjex-border px-4 py-4 text-center text-xs leading-relaxed text-forjex-muted"
                      >
                        {group.strategy}
                      </td>
                    )}
                    <td className="border border-forjex-border px-4 py-4 text-xs font-medium text-forjex-text">
                      {row.responsible}
                    </td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
