# Capa de Dominio - Arquitectura Hexagonal

Este repositorio utiliza una arquitectura hexagonal, con la capa de dominio organizada en las siguientes carpetas:

| Carpeta                | Propósito                                                                                                     |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- |
| **entities**     | Contiene las entidades que representan las tablas en el modelo entidad-relación.                              |
| **valueObjects** | Incluye objetos de valor, que son inmutables y encapsulan reglas de negocio específicas.                      |
| **repositories** | Define las interfaces para los repositorios, que describen las operaciones de acceso a las entidades.          |
| **services**     | Contiene servicios de dominio que encapsulan lógica de negocio compleja o que involucra múltiples entidades. |
