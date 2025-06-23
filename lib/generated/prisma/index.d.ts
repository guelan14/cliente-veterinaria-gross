
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ServicioClinico
 * 
 */
export type ServicioClinico = $Result.DefaultSelection<Prisma.$ServicioClinicoPayload>
/**
 * Model Seccion
 * 
 */
export type Seccion = $Result.DefaultSelection<Prisma.$SeccionPayload>
/**
 * Model Bloque
 * 
 */
export type Bloque = $Result.DefaultSelection<Prisma.$BloquePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ServicioClinicos
 * const servicioClinicos = await prisma.servicioClinico.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ServicioClinicos
   * const servicioClinicos = await prisma.servicioClinico.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.servicioClinico`: Exposes CRUD operations for the **ServicioClinico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServicioClinicos
    * const servicioClinicos = await prisma.servicioClinico.findMany()
    * ```
    */
  get servicioClinico(): Prisma.ServicioClinicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seccion`: Exposes CRUD operations for the **Seccion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seccions
    * const seccions = await prisma.seccion.findMany()
    * ```
    */
  get seccion(): Prisma.SeccionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bloque`: Exposes CRUD operations for the **Bloque** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bloques
    * const bloques = await prisma.bloque.findMany()
    * ```
    */
  get bloque(): Prisma.BloqueDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ServicioClinico: 'ServicioClinico',
    Seccion: 'Seccion',
    Bloque: 'Bloque'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "servicioClinico" | "seccion" | "bloque"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ServicioClinico: {
        payload: Prisma.$ServicioClinicoPayload<ExtArgs>
        fields: Prisma.ServicioClinicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicioClinicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioClinicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicioClinicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioClinicoPayload>
          }
          findFirst: {
            args: Prisma.ServicioClinicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioClinicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicioClinicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioClinicoPayload>
          }
          findMany: {
            args: Prisma.ServicioClinicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioClinicoPayload>[]
          }
          create: {
            args: Prisma.ServicioClinicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioClinicoPayload>
          }
          createMany: {
            args: Prisma.ServicioClinicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicioClinicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioClinicoPayload>[]
          }
          delete: {
            args: Prisma.ServicioClinicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioClinicoPayload>
          }
          update: {
            args: Prisma.ServicioClinicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioClinicoPayload>
          }
          deleteMany: {
            args: Prisma.ServicioClinicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicioClinicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicioClinicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioClinicoPayload>[]
          }
          upsert: {
            args: Prisma.ServicioClinicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioClinicoPayload>
          }
          aggregate: {
            args: Prisma.ServicioClinicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicioClinico>
          }
          groupBy: {
            args: Prisma.ServicioClinicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicioClinicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicioClinicoCountArgs<ExtArgs>
            result: $Utils.Optional<ServicioClinicoCountAggregateOutputType> | number
          }
        }
      }
      Seccion: {
        payload: Prisma.$SeccionPayload<ExtArgs>
        fields: Prisma.SeccionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeccionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeccionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          findFirst: {
            args: Prisma.SeccionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeccionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          findMany: {
            args: Prisma.SeccionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>[]
          }
          create: {
            args: Prisma.SeccionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          createMany: {
            args: Prisma.SeccionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeccionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>[]
          }
          delete: {
            args: Prisma.SeccionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          update: {
            args: Prisma.SeccionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          deleteMany: {
            args: Prisma.SeccionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeccionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeccionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>[]
          }
          upsert: {
            args: Prisma.SeccionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeccionPayload>
          }
          aggregate: {
            args: Prisma.SeccionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeccion>
          }
          groupBy: {
            args: Prisma.SeccionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeccionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeccionCountArgs<ExtArgs>
            result: $Utils.Optional<SeccionCountAggregateOutputType> | number
          }
        }
      }
      Bloque: {
        payload: Prisma.$BloquePayload<ExtArgs>
        fields: Prisma.BloqueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BloqueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloquePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BloqueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloquePayload>
          }
          findFirst: {
            args: Prisma.BloqueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloquePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BloqueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloquePayload>
          }
          findMany: {
            args: Prisma.BloqueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloquePayload>[]
          }
          create: {
            args: Prisma.BloqueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloquePayload>
          }
          createMany: {
            args: Prisma.BloqueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BloqueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloquePayload>[]
          }
          delete: {
            args: Prisma.BloqueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloquePayload>
          }
          update: {
            args: Prisma.BloqueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloquePayload>
          }
          deleteMany: {
            args: Prisma.BloqueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BloqueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BloqueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloquePayload>[]
          }
          upsert: {
            args: Prisma.BloqueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloquePayload>
          }
          aggregate: {
            args: Prisma.BloqueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBloque>
          }
          groupBy: {
            args: Prisma.BloqueGroupByArgs<ExtArgs>
            result: $Utils.Optional<BloqueGroupByOutputType>[]
          }
          count: {
            args: Prisma.BloqueCountArgs<ExtArgs>
            result: $Utils.Optional<BloqueCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    servicioClinico?: ServicioClinicoOmit
    seccion?: SeccionOmit
    bloque?: BloqueOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SeccionCountOutputType
   */

  export type SeccionCountOutputType = {
    bloques: number
  }

  export type SeccionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloques?: boolean | SeccionCountOutputTypeCountBloquesArgs
  }

  // Custom InputTypes
  /**
   * SeccionCountOutputType without action
   */
  export type SeccionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeccionCountOutputType
     */
    select?: SeccionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeccionCountOutputType without action
   */
  export type SeccionCountOutputTypeCountBloquesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloqueWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ServicioClinico
   */

  export type AggregateServicioClinico = {
    _count: ServicioClinicoCountAggregateOutputType | null
    _avg: ServicioClinicoAvgAggregateOutputType | null
    _sum: ServicioClinicoSumAggregateOutputType | null
    _min: ServicioClinicoMinAggregateOutputType | null
    _max: ServicioClinicoMaxAggregateOutputType | null
  }

  export type ServicioClinicoAvgAggregateOutputType = {
    id: number | null
  }

  export type ServicioClinicoSumAggregateOutputType = {
    id: number | null
  }

  export type ServicioClinicoMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    imagen: string | null
  }

  export type ServicioClinicoMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descripcion: string | null
    imagen: string | null
  }

  export type ServicioClinicoCountAggregateOutputType = {
    id: number
    titulo: number
    descripcion: number
    imagen: number
    _all: number
  }


  export type ServicioClinicoAvgAggregateInputType = {
    id?: true
  }

  export type ServicioClinicoSumAggregateInputType = {
    id?: true
  }

  export type ServicioClinicoMinAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    imagen?: true
  }

  export type ServicioClinicoMaxAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    imagen?: true
  }

  export type ServicioClinicoCountAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    imagen?: true
    _all?: true
  }

  export type ServicioClinicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicioClinico to aggregate.
     */
    where?: ServicioClinicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicioClinicos to fetch.
     */
    orderBy?: ServicioClinicoOrderByWithRelationInput | ServicioClinicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicioClinicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicioClinicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicioClinicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServicioClinicos
    **/
    _count?: true | ServicioClinicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicioClinicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicioClinicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicioClinicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicioClinicoMaxAggregateInputType
  }

  export type GetServicioClinicoAggregateType<T extends ServicioClinicoAggregateArgs> = {
        [P in keyof T & keyof AggregateServicioClinico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicioClinico[P]>
      : GetScalarType<T[P], AggregateServicioClinico[P]>
  }




  export type ServicioClinicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioClinicoWhereInput
    orderBy?: ServicioClinicoOrderByWithAggregationInput | ServicioClinicoOrderByWithAggregationInput[]
    by: ServicioClinicoScalarFieldEnum[] | ServicioClinicoScalarFieldEnum
    having?: ServicioClinicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicioClinicoCountAggregateInputType | true
    _avg?: ServicioClinicoAvgAggregateInputType
    _sum?: ServicioClinicoSumAggregateInputType
    _min?: ServicioClinicoMinAggregateInputType
    _max?: ServicioClinicoMaxAggregateInputType
  }

  export type ServicioClinicoGroupByOutputType = {
    id: number
    titulo: string
    descripcion: string
    imagen: string
    _count: ServicioClinicoCountAggregateOutputType | null
    _avg: ServicioClinicoAvgAggregateOutputType | null
    _sum: ServicioClinicoSumAggregateOutputType | null
    _min: ServicioClinicoMinAggregateOutputType | null
    _max: ServicioClinicoMaxAggregateOutputType | null
  }

  type GetServicioClinicoGroupByPayload<T extends ServicioClinicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicioClinicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicioClinicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicioClinicoGroupByOutputType[P]>
            : GetScalarType<T[P], ServicioClinicoGroupByOutputType[P]>
        }
      >
    >


  export type ServicioClinicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    imagen?: boolean
  }, ExtArgs["result"]["servicioClinico"]>

  export type ServicioClinicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    imagen?: boolean
  }, ExtArgs["result"]["servicioClinico"]>

  export type ServicioClinicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    imagen?: boolean
  }, ExtArgs["result"]["servicioClinico"]>

  export type ServicioClinicoSelectScalar = {
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    imagen?: boolean
  }

  export type ServicioClinicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descripcion" | "imagen", ExtArgs["result"]["servicioClinico"]>

  export type $ServicioClinicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServicioClinico"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descripcion: string
      imagen: string
    }, ExtArgs["result"]["servicioClinico"]>
    composites: {}
  }

  type ServicioClinicoGetPayload<S extends boolean | null | undefined | ServicioClinicoDefaultArgs> = $Result.GetResult<Prisma.$ServicioClinicoPayload, S>

  type ServicioClinicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicioClinicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicioClinicoCountAggregateInputType | true
    }

  export interface ServicioClinicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServicioClinico'], meta: { name: 'ServicioClinico' } }
    /**
     * Find zero or one ServicioClinico that matches the filter.
     * @param {ServicioClinicoFindUniqueArgs} args - Arguments to find a ServicioClinico
     * @example
     * // Get one ServicioClinico
     * const servicioClinico = await prisma.servicioClinico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicioClinicoFindUniqueArgs>(args: SelectSubset<T, ServicioClinicoFindUniqueArgs<ExtArgs>>): Prisma__ServicioClinicoClient<$Result.GetResult<Prisma.$ServicioClinicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServicioClinico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicioClinicoFindUniqueOrThrowArgs} args - Arguments to find a ServicioClinico
     * @example
     * // Get one ServicioClinico
     * const servicioClinico = await prisma.servicioClinico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicioClinicoFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicioClinicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicioClinicoClient<$Result.GetResult<Prisma.$ServicioClinicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicioClinico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioClinicoFindFirstArgs} args - Arguments to find a ServicioClinico
     * @example
     * // Get one ServicioClinico
     * const servicioClinico = await prisma.servicioClinico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicioClinicoFindFirstArgs>(args?: SelectSubset<T, ServicioClinicoFindFirstArgs<ExtArgs>>): Prisma__ServicioClinicoClient<$Result.GetResult<Prisma.$ServicioClinicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicioClinico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioClinicoFindFirstOrThrowArgs} args - Arguments to find a ServicioClinico
     * @example
     * // Get one ServicioClinico
     * const servicioClinico = await prisma.servicioClinico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicioClinicoFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicioClinicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicioClinicoClient<$Result.GetResult<Prisma.$ServicioClinicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServicioClinicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioClinicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServicioClinicos
     * const servicioClinicos = await prisma.servicioClinico.findMany()
     * 
     * // Get first 10 ServicioClinicos
     * const servicioClinicos = await prisma.servicioClinico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicioClinicoWithIdOnly = await prisma.servicioClinico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicioClinicoFindManyArgs>(args?: SelectSubset<T, ServicioClinicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioClinicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServicioClinico.
     * @param {ServicioClinicoCreateArgs} args - Arguments to create a ServicioClinico.
     * @example
     * // Create one ServicioClinico
     * const ServicioClinico = await prisma.servicioClinico.create({
     *   data: {
     *     // ... data to create a ServicioClinico
     *   }
     * })
     * 
     */
    create<T extends ServicioClinicoCreateArgs>(args: SelectSubset<T, ServicioClinicoCreateArgs<ExtArgs>>): Prisma__ServicioClinicoClient<$Result.GetResult<Prisma.$ServicioClinicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServicioClinicos.
     * @param {ServicioClinicoCreateManyArgs} args - Arguments to create many ServicioClinicos.
     * @example
     * // Create many ServicioClinicos
     * const servicioClinico = await prisma.servicioClinico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicioClinicoCreateManyArgs>(args?: SelectSubset<T, ServicioClinicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServicioClinicos and returns the data saved in the database.
     * @param {ServicioClinicoCreateManyAndReturnArgs} args - Arguments to create many ServicioClinicos.
     * @example
     * // Create many ServicioClinicos
     * const servicioClinico = await prisma.servicioClinico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServicioClinicos and only return the `id`
     * const servicioClinicoWithIdOnly = await prisma.servicioClinico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicioClinicoCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicioClinicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioClinicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServicioClinico.
     * @param {ServicioClinicoDeleteArgs} args - Arguments to delete one ServicioClinico.
     * @example
     * // Delete one ServicioClinico
     * const ServicioClinico = await prisma.servicioClinico.delete({
     *   where: {
     *     // ... filter to delete one ServicioClinico
     *   }
     * })
     * 
     */
    delete<T extends ServicioClinicoDeleteArgs>(args: SelectSubset<T, ServicioClinicoDeleteArgs<ExtArgs>>): Prisma__ServicioClinicoClient<$Result.GetResult<Prisma.$ServicioClinicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServicioClinico.
     * @param {ServicioClinicoUpdateArgs} args - Arguments to update one ServicioClinico.
     * @example
     * // Update one ServicioClinico
     * const servicioClinico = await prisma.servicioClinico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicioClinicoUpdateArgs>(args: SelectSubset<T, ServicioClinicoUpdateArgs<ExtArgs>>): Prisma__ServicioClinicoClient<$Result.GetResult<Prisma.$ServicioClinicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServicioClinicos.
     * @param {ServicioClinicoDeleteManyArgs} args - Arguments to filter ServicioClinicos to delete.
     * @example
     * // Delete a few ServicioClinicos
     * const { count } = await prisma.servicioClinico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicioClinicoDeleteManyArgs>(args?: SelectSubset<T, ServicioClinicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicioClinicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioClinicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServicioClinicos
     * const servicioClinico = await prisma.servicioClinico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicioClinicoUpdateManyArgs>(args: SelectSubset<T, ServicioClinicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicioClinicos and returns the data updated in the database.
     * @param {ServicioClinicoUpdateManyAndReturnArgs} args - Arguments to update many ServicioClinicos.
     * @example
     * // Update many ServicioClinicos
     * const servicioClinico = await prisma.servicioClinico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServicioClinicos and only return the `id`
     * const servicioClinicoWithIdOnly = await prisma.servicioClinico.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServicioClinicoUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicioClinicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioClinicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServicioClinico.
     * @param {ServicioClinicoUpsertArgs} args - Arguments to update or create a ServicioClinico.
     * @example
     * // Update or create a ServicioClinico
     * const servicioClinico = await prisma.servicioClinico.upsert({
     *   create: {
     *     // ... data to create a ServicioClinico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServicioClinico we want to update
     *   }
     * })
     */
    upsert<T extends ServicioClinicoUpsertArgs>(args: SelectSubset<T, ServicioClinicoUpsertArgs<ExtArgs>>): Prisma__ServicioClinicoClient<$Result.GetResult<Prisma.$ServicioClinicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServicioClinicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioClinicoCountArgs} args - Arguments to filter ServicioClinicos to count.
     * @example
     * // Count the number of ServicioClinicos
     * const count = await prisma.servicioClinico.count({
     *   where: {
     *     // ... the filter for the ServicioClinicos we want to count
     *   }
     * })
    **/
    count<T extends ServicioClinicoCountArgs>(
      args?: Subset<T, ServicioClinicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicioClinicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServicioClinico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioClinicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicioClinicoAggregateArgs>(args: Subset<T, ServicioClinicoAggregateArgs>): Prisma.PrismaPromise<GetServicioClinicoAggregateType<T>>

    /**
     * Group by ServicioClinico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioClinicoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicioClinicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicioClinicoGroupByArgs['orderBy'] }
        : { orderBy?: ServicioClinicoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicioClinicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicioClinicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServicioClinico model
   */
  readonly fields: ServicioClinicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServicioClinico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicioClinicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServicioClinico model
   */
  interface ServicioClinicoFieldRefs {
    readonly id: FieldRef<"ServicioClinico", 'Int'>
    readonly titulo: FieldRef<"ServicioClinico", 'String'>
    readonly descripcion: FieldRef<"ServicioClinico", 'String'>
    readonly imagen: FieldRef<"ServicioClinico", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServicioClinico findUnique
   */
  export type ServicioClinicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioClinico
     */
    select?: ServicioClinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioClinico
     */
    omit?: ServicioClinicoOmit<ExtArgs> | null
    /**
     * Filter, which ServicioClinico to fetch.
     */
    where: ServicioClinicoWhereUniqueInput
  }

  /**
   * ServicioClinico findUniqueOrThrow
   */
  export type ServicioClinicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioClinico
     */
    select?: ServicioClinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioClinico
     */
    omit?: ServicioClinicoOmit<ExtArgs> | null
    /**
     * Filter, which ServicioClinico to fetch.
     */
    where: ServicioClinicoWhereUniqueInput
  }

  /**
   * ServicioClinico findFirst
   */
  export type ServicioClinicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioClinico
     */
    select?: ServicioClinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioClinico
     */
    omit?: ServicioClinicoOmit<ExtArgs> | null
    /**
     * Filter, which ServicioClinico to fetch.
     */
    where?: ServicioClinicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicioClinicos to fetch.
     */
    orderBy?: ServicioClinicoOrderByWithRelationInput | ServicioClinicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicioClinicos.
     */
    cursor?: ServicioClinicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicioClinicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicioClinicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicioClinicos.
     */
    distinct?: ServicioClinicoScalarFieldEnum | ServicioClinicoScalarFieldEnum[]
  }

  /**
   * ServicioClinico findFirstOrThrow
   */
  export type ServicioClinicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioClinico
     */
    select?: ServicioClinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioClinico
     */
    omit?: ServicioClinicoOmit<ExtArgs> | null
    /**
     * Filter, which ServicioClinico to fetch.
     */
    where?: ServicioClinicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicioClinicos to fetch.
     */
    orderBy?: ServicioClinicoOrderByWithRelationInput | ServicioClinicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicioClinicos.
     */
    cursor?: ServicioClinicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicioClinicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicioClinicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicioClinicos.
     */
    distinct?: ServicioClinicoScalarFieldEnum | ServicioClinicoScalarFieldEnum[]
  }

  /**
   * ServicioClinico findMany
   */
  export type ServicioClinicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioClinico
     */
    select?: ServicioClinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioClinico
     */
    omit?: ServicioClinicoOmit<ExtArgs> | null
    /**
     * Filter, which ServicioClinicos to fetch.
     */
    where?: ServicioClinicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicioClinicos to fetch.
     */
    orderBy?: ServicioClinicoOrderByWithRelationInput | ServicioClinicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServicioClinicos.
     */
    cursor?: ServicioClinicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicioClinicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicioClinicos.
     */
    skip?: number
    distinct?: ServicioClinicoScalarFieldEnum | ServicioClinicoScalarFieldEnum[]
  }

  /**
   * ServicioClinico create
   */
  export type ServicioClinicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioClinico
     */
    select?: ServicioClinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioClinico
     */
    omit?: ServicioClinicoOmit<ExtArgs> | null
    /**
     * The data needed to create a ServicioClinico.
     */
    data: XOR<ServicioClinicoCreateInput, ServicioClinicoUncheckedCreateInput>
  }

  /**
   * ServicioClinico createMany
   */
  export type ServicioClinicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServicioClinicos.
     */
    data: ServicioClinicoCreateManyInput | ServicioClinicoCreateManyInput[]
  }

  /**
   * ServicioClinico createManyAndReturn
   */
  export type ServicioClinicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioClinico
     */
    select?: ServicioClinicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioClinico
     */
    omit?: ServicioClinicoOmit<ExtArgs> | null
    /**
     * The data used to create many ServicioClinicos.
     */
    data: ServicioClinicoCreateManyInput | ServicioClinicoCreateManyInput[]
  }

  /**
   * ServicioClinico update
   */
  export type ServicioClinicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioClinico
     */
    select?: ServicioClinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioClinico
     */
    omit?: ServicioClinicoOmit<ExtArgs> | null
    /**
     * The data needed to update a ServicioClinico.
     */
    data: XOR<ServicioClinicoUpdateInput, ServicioClinicoUncheckedUpdateInput>
    /**
     * Choose, which ServicioClinico to update.
     */
    where: ServicioClinicoWhereUniqueInput
  }

  /**
   * ServicioClinico updateMany
   */
  export type ServicioClinicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServicioClinicos.
     */
    data: XOR<ServicioClinicoUpdateManyMutationInput, ServicioClinicoUncheckedUpdateManyInput>
    /**
     * Filter which ServicioClinicos to update
     */
    where?: ServicioClinicoWhereInput
    /**
     * Limit how many ServicioClinicos to update.
     */
    limit?: number
  }

  /**
   * ServicioClinico updateManyAndReturn
   */
  export type ServicioClinicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioClinico
     */
    select?: ServicioClinicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioClinico
     */
    omit?: ServicioClinicoOmit<ExtArgs> | null
    /**
     * The data used to update ServicioClinicos.
     */
    data: XOR<ServicioClinicoUpdateManyMutationInput, ServicioClinicoUncheckedUpdateManyInput>
    /**
     * Filter which ServicioClinicos to update
     */
    where?: ServicioClinicoWhereInput
    /**
     * Limit how many ServicioClinicos to update.
     */
    limit?: number
  }

  /**
   * ServicioClinico upsert
   */
  export type ServicioClinicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioClinico
     */
    select?: ServicioClinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioClinico
     */
    omit?: ServicioClinicoOmit<ExtArgs> | null
    /**
     * The filter to search for the ServicioClinico to update in case it exists.
     */
    where: ServicioClinicoWhereUniqueInput
    /**
     * In case the ServicioClinico found by the `where` argument doesn't exist, create a new ServicioClinico with this data.
     */
    create: XOR<ServicioClinicoCreateInput, ServicioClinicoUncheckedCreateInput>
    /**
     * In case the ServicioClinico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicioClinicoUpdateInput, ServicioClinicoUncheckedUpdateInput>
  }

  /**
   * ServicioClinico delete
   */
  export type ServicioClinicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioClinico
     */
    select?: ServicioClinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioClinico
     */
    omit?: ServicioClinicoOmit<ExtArgs> | null
    /**
     * Filter which ServicioClinico to delete.
     */
    where: ServicioClinicoWhereUniqueInput
  }

  /**
   * ServicioClinico deleteMany
   */
  export type ServicioClinicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicioClinicos to delete
     */
    where?: ServicioClinicoWhereInput
    /**
     * Limit how many ServicioClinicos to delete.
     */
    limit?: number
  }

  /**
   * ServicioClinico without action
   */
  export type ServicioClinicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioClinico
     */
    select?: ServicioClinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioClinico
     */
    omit?: ServicioClinicoOmit<ExtArgs> | null
  }


  /**
   * Model Seccion
   */

  export type AggregateSeccion = {
    _count: SeccionCountAggregateOutputType | null
    _avg: SeccionAvgAggregateOutputType | null
    _sum: SeccionSumAggregateOutputType | null
    _min: SeccionMinAggregateOutputType | null
    _max: SeccionMaxAggregateOutputType | null
  }

  export type SeccionAvgAggregateOutputType = {
    id: number | null
  }

  export type SeccionSumAggregateOutputType = {
    id: number | null
  }

  export type SeccionMinAggregateOutputType = {
    id: number | null
    slug: string | null
    nombre: string | null
  }

  export type SeccionMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    nombre: string | null
  }

  export type SeccionCountAggregateOutputType = {
    id: number
    slug: number
    nombre: number
    _all: number
  }


  export type SeccionAvgAggregateInputType = {
    id?: true
  }

  export type SeccionSumAggregateInputType = {
    id?: true
  }

  export type SeccionMinAggregateInputType = {
    id?: true
    slug?: true
    nombre?: true
  }

  export type SeccionMaxAggregateInputType = {
    id?: true
    slug?: true
    nombre?: true
  }

  export type SeccionCountAggregateInputType = {
    id?: true
    slug?: true
    nombre?: true
    _all?: true
  }

  export type SeccionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seccion to aggregate.
     */
    where?: SeccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seccions to fetch.
     */
    orderBy?: SeccionOrderByWithRelationInput | SeccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seccions
    **/
    _count?: true | SeccionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeccionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeccionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeccionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeccionMaxAggregateInputType
  }

  export type GetSeccionAggregateType<T extends SeccionAggregateArgs> = {
        [P in keyof T & keyof AggregateSeccion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeccion[P]>
      : GetScalarType<T[P], AggregateSeccion[P]>
  }




  export type SeccionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeccionWhereInput
    orderBy?: SeccionOrderByWithAggregationInput | SeccionOrderByWithAggregationInput[]
    by: SeccionScalarFieldEnum[] | SeccionScalarFieldEnum
    having?: SeccionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeccionCountAggregateInputType | true
    _avg?: SeccionAvgAggregateInputType
    _sum?: SeccionSumAggregateInputType
    _min?: SeccionMinAggregateInputType
    _max?: SeccionMaxAggregateInputType
  }

  export type SeccionGroupByOutputType = {
    id: number
    slug: string
    nombre: string
    _count: SeccionCountAggregateOutputType | null
    _avg: SeccionAvgAggregateOutputType | null
    _sum: SeccionSumAggregateOutputType | null
    _min: SeccionMinAggregateOutputType | null
    _max: SeccionMaxAggregateOutputType | null
  }

  type GetSeccionGroupByPayload<T extends SeccionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeccionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeccionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeccionGroupByOutputType[P]>
            : GetScalarType<T[P], SeccionGroupByOutputType[P]>
        }
      >
    >


  export type SeccionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    nombre?: boolean
    bloques?: boolean | Seccion$bloquesArgs<ExtArgs>
    _count?: boolean | SeccionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seccion"]>

  export type SeccionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["seccion"]>

  export type SeccionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["seccion"]>

  export type SeccionSelectScalar = {
    id?: boolean
    slug?: boolean
    nombre?: boolean
  }

  export type SeccionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "nombre", ExtArgs["result"]["seccion"]>
  export type SeccionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloques?: boolean | Seccion$bloquesArgs<ExtArgs>
    _count?: boolean | SeccionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeccionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SeccionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SeccionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seccion"
    objects: {
      bloques: Prisma.$BloquePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      nombre: string
    }, ExtArgs["result"]["seccion"]>
    composites: {}
  }

  type SeccionGetPayload<S extends boolean | null | undefined | SeccionDefaultArgs> = $Result.GetResult<Prisma.$SeccionPayload, S>

  type SeccionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeccionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeccionCountAggregateInputType | true
    }

  export interface SeccionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seccion'], meta: { name: 'Seccion' } }
    /**
     * Find zero or one Seccion that matches the filter.
     * @param {SeccionFindUniqueArgs} args - Arguments to find a Seccion
     * @example
     * // Get one Seccion
     * const seccion = await prisma.seccion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeccionFindUniqueArgs>(args: SelectSubset<T, SeccionFindUniqueArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seccion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeccionFindUniqueOrThrowArgs} args - Arguments to find a Seccion
     * @example
     * // Get one Seccion
     * const seccion = await prisma.seccion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeccionFindUniqueOrThrowArgs>(args: SelectSubset<T, SeccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seccion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionFindFirstArgs} args - Arguments to find a Seccion
     * @example
     * // Get one Seccion
     * const seccion = await prisma.seccion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeccionFindFirstArgs>(args?: SelectSubset<T, SeccionFindFirstArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seccion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionFindFirstOrThrowArgs} args - Arguments to find a Seccion
     * @example
     * // Get one Seccion
     * const seccion = await prisma.seccion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeccionFindFirstOrThrowArgs>(args?: SelectSubset<T, SeccionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seccions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seccions
     * const seccions = await prisma.seccion.findMany()
     * 
     * // Get first 10 Seccions
     * const seccions = await prisma.seccion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seccionWithIdOnly = await prisma.seccion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeccionFindManyArgs>(args?: SelectSubset<T, SeccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seccion.
     * @param {SeccionCreateArgs} args - Arguments to create a Seccion.
     * @example
     * // Create one Seccion
     * const Seccion = await prisma.seccion.create({
     *   data: {
     *     // ... data to create a Seccion
     *   }
     * })
     * 
     */
    create<T extends SeccionCreateArgs>(args: SelectSubset<T, SeccionCreateArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seccions.
     * @param {SeccionCreateManyArgs} args - Arguments to create many Seccions.
     * @example
     * // Create many Seccions
     * const seccion = await prisma.seccion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeccionCreateManyArgs>(args?: SelectSubset<T, SeccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seccions and returns the data saved in the database.
     * @param {SeccionCreateManyAndReturnArgs} args - Arguments to create many Seccions.
     * @example
     * // Create many Seccions
     * const seccion = await prisma.seccion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seccions and only return the `id`
     * const seccionWithIdOnly = await prisma.seccion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeccionCreateManyAndReturnArgs>(args?: SelectSubset<T, SeccionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seccion.
     * @param {SeccionDeleteArgs} args - Arguments to delete one Seccion.
     * @example
     * // Delete one Seccion
     * const Seccion = await prisma.seccion.delete({
     *   where: {
     *     // ... filter to delete one Seccion
     *   }
     * })
     * 
     */
    delete<T extends SeccionDeleteArgs>(args: SelectSubset<T, SeccionDeleteArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seccion.
     * @param {SeccionUpdateArgs} args - Arguments to update one Seccion.
     * @example
     * // Update one Seccion
     * const seccion = await prisma.seccion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeccionUpdateArgs>(args: SelectSubset<T, SeccionUpdateArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seccions.
     * @param {SeccionDeleteManyArgs} args - Arguments to filter Seccions to delete.
     * @example
     * // Delete a few Seccions
     * const { count } = await prisma.seccion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeccionDeleteManyArgs>(args?: SelectSubset<T, SeccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seccions
     * const seccion = await prisma.seccion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeccionUpdateManyArgs>(args: SelectSubset<T, SeccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seccions and returns the data updated in the database.
     * @param {SeccionUpdateManyAndReturnArgs} args - Arguments to update many Seccions.
     * @example
     * // Update many Seccions
     * const seccion = await prisma.seccion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seccions and only return the `id`
     * const seccionWithIdOnly = await prisma.seccion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeccionUpdateManyAndReturnArgs>(args: SelectSubset<T, SeccionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seccion.
     * @param {SeccionUpsertArgs} args - Arguments to update or create a Seccion.
     * @example
     * // Update or create a Seccion
     * const seccion = await prisma.seccion.upsert({
     *   create: {
     *     // ... data to create a Seccion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seccion we want to update
     *   }
     * })
     */
    upsert<T extends SeccionUpsertArgs>(args: SelectSubset<T, SeccionUpsertArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionCountArgs} args - Arguments to filter Seccions to count.
     * @example
     * // Count the number of Seccions
     * const count = await prisma.seccion.count({
     *   where: {
     *     // ... the filter for the Seccions we want to count
     *   }
     * })
    **/
    count<T extends SeccionCountArgs>(
      args?: Subset<T, SeccionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeccionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeccionAggregateArgs>(args: Subset<T, SeccionAggregateArgs>): Prisma.PrismaPromise<GetSeccionAggregateType<T>>

    /**
     * Group by Seccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeccionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeccionGroupByArgs['orderBy'] }
        : { orderBy?: SeccionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seccion model
   */
  readonly fields: SeccionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seccion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeccionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bloques<T extends Seccion$bloquesArgs<ExtArgs> = {}>(args?: Subset<T, Seccion$bloquesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Seccion model
   */
  interface SeccionFieldRefs {
    readonly id: FieldRef<"Seccion", 'Int'>
    readonly slug: FieldRef<"Seccion", 'String'>
    readonly nombre: FieldRef<"Seccion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Seccion findUnique
   */
  export type SeccionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter, which Seccion to fetch.
     */
    where: SeccionWhereUniqueInput
  }

  /**
   * Seccion findUniqueOrThrow
   */
  export type SeccionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter, which Seccion to fetch.
     */
    where: SeccionWhereUniqueInput
  }

  /**
   * Seccion findFirst
   */
  export type SeccionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter, which Seccion to fetch.
     */
    where?: SeccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seccions to fetch.
     */
    orderBy?: SeccionOrderByWithRelationInput | SeccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seccions.
     */
    cursor?: SeccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seccions.
     */
    distinct?: SeccionScalarFieldEnum | SeccionScalarFieldEnum[]
  }

  /**
   * Seccion findFirstOrThrow
   */
  export type SeccionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter, which Seccion to fetch.
     */
    where?: SeccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seccions to fetch.
     */
    orderBy?: SeccionOrderByWithRelationInput | SeccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seccions.
     */
    cursor?: SeccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seccions.
     */
    distinct?: SeccionScalarFieldEnum | SeccionScalarFieldEnum[]
  }

  /**
   * Seccion findMany
   */
  export type SeccionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter, which Seccions to fetch.
     */
    where?: SeccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seccions to fetch.
     */
    orderBy?: SeccionOrderByWithRelationInput | SeccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seccions.
     */
    cursor?: SeccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seccions.
     */
    skip?: number
    distinct?: SeccionScalarFieldEnum | SeccionScalarFieldEnum[]
  }

  /**
   * Seccion create
   */
  export type SeccionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * The data needed to create a Seccion.
     */
    data: XOR<SeccionCreateInput, SeccionUncheckedCreateInput>
  }

  /**
   * Seccion createMany
   */
  export type SeccionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seccions.
     */
    data: SeccionCreateManyInput | SeccionCreateManyInput[]
  }

  /**
   * Seccion createManyAndReturn
   */
  export type SeccionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * The data used to create many Seccions.
     */
    data: SeccionCreateManyInput | SeccionCreateManyInput[]
  }

  /**
   * Seccion update
   */
  export type SeccionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * The data needed to update a Seccion.
     */
    data: XOR<SeccionUpdateInput, SeccionUncheckedUpdateInput>
    /**
     * Choose, which Seccion to update.
     */
    where: SeccionWhereUniqueInput
  }

  /**
   * Seccion updateMany
   */
  export type SeccionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seccions.
     */
    data: XOR<SeccionUpdateManyMutationInput, SeccionUncheckedUpdateManyInput>
    /**
     * Filter which Seccions to update
     */
    where?: SeccionWhereInput
    /**
     * Limit how many Seccions to update.
     */
    limit?: number
  }

  /**
   * Seccion updateManyAndReturn
   */
  export type SeccionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * The data used to update Seccions.
     */
    data: XOR<SeccionUpdateManyMutationInput, SeccionUncheckedUpdateManyInput>
    /**
     * Filter which Seccions to update
     */
    where?: SeccionWhereInput
    /**
     * Limit how many Seccions to update.
     */
    limit?: number
  }

  /**
   * Seccion upsert
   */
  export type SeccionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * The filter to search for the Seccion to update in case it exists.
     */
    where: SeccionWhereUniqueInput
    /**
     * In case the Seccion found by the `where` argument doesn't exist, create a new Seccion with this data.
     */
    create: XOR<SeccionCreateInput, SeccionUncheckedCreateInput>
    /**
     * In case the Seccion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeccionUpdateInput, SeccionUncheckedUpdateInput>
  }

  /**
   * Seccion delete
   */
  export type SeccionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
    /**
     * Filter which Seccion to delete.
     */
    where: SeccionWhereUniqueInput
  }

  /**
   * Seccion deleteMany
   */
  export type SeccionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seccions to delete
     */
    where?: SeccionWhereInput
    /**
     * Limit how many Seccions to delete.
     */
    limit?: number
  }

  /**
   * Seccion.bloques
   */
  export type Seccion$bloquesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloque
     */
    select?: BloqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloque
     */
    omit?: BloqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueInclude<ExtArgs> | null
    where?: BloqueWhereInput
    orderBy?: BloqueOrderByWithRelationInput | BloqueOrderByWithRelationInput[]
    cursor?: BloqueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BloqueScalarFieldEnum | BloqueScalarFieldEnum[]
  }

  /**
   * Seccion without action
   */
  export type SeccionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seccion
     */
    select?: SeccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seccion
     */
    omit?: SeccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeccionInclude<ExtArgs> | null
  }


  /**
   * Model Bloque
   */

  export type AggregateBloque = {
    _count: BloqueCountAggregateOutputType | null
    _avg: BloqueAvgAggregateOutputType | null
    _sum: BloqueSumAggregateOutputType | null
    _min: BloqueMinAggregateOutputType | null
    _max: BloqueMaxAggregateOutputType | null
  }

  export type BloqueAvgAggregateOutputType = {
    id: number | null
    orden: number | null
    seccionId: number | null
  }

  export type BloqueSumAggregateOutputType = {
    id: number | null
    orden: number | null
    seccionId: number | null
  }

  export type BloqueMinAggregateOutputType = {
    id: number | null
    tipo: string | null
    clave: string | null
    contenido: string | null
    orden: number | null
    seccionId: number | null
  }

  export type BloqueMaxAggregateOutputType = {
    id: number | null
    tipo: string | null
    clave: string | null
    contenido: string | null
    orden: number | null
    seccionId: number | null
  }

  export type BloqueCountAggregateOutputType = {
    id: number
    tipo: number
    clave: number
    contenido: number
    orden: number
    seccionId: number
    _all: number
  }


  export type BloqueAvgAggregateInputType = {
    id?: true
    orden?: true
    seccionId?: true
  }

  export type BloqueSumAggregateInputType = {
    id?: true
    orden?: true
    seccionId?: true
  }

  export type BloqueMinAggregateInputType = {
    id?: true
    tipo?: true
    clave?: true
    contenido?: true
    orden?: true
    seccionId?: true
  }

  export type BloqueMaxAggregateInputType = {
    id?: true
    tipo?: true
    clave?: true
    contenido?: true
    orden?: true
    seccionId?: true
  }

  export type BloqueCountAggregateInputType = {
    id?: true
    tipo?: true
    clave?: true
    contenido?: true
    orden?: true
    seccionId?: true
    _all?: true
  }

  export type BloqueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bloque to aggregate.
     */
    where?: BloqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bloques to fetch.
     */
    orderBy?: BloqueOrderByWithRelationInput | BloqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BloqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bloques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bloques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bloques
    **/
    _count?: true | BloqueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BloqueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BloqueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BloqueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BloqueMaxAggregateInputType
  }

  export type GetBloqueAggregateType<T extends BloqueAggregateArgs> = {
        [P in keyof T & keyof AggregateBloque]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBloque[P]>
      : GetScalarType<T[P], AggregateBloque[P]>
  }




  export type BloqueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloqueWhereInput
    orderBy?: BloqueOrderByWithAggregationInput | BloqueOrderByWithAggregationInput[]
    by: BloqueScalarFieldEnum[] | BloqueScalarFieldEnum
    having?: BloqueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BloqueCountAggregateInputType | true
    _avg?: BloqueAvgAggregateInputType
    _sum?: BloqueSumAggregateInputType
    _min?: BloqueMinAggregateInputType
    _max?: BloqueMaxAggregateInputType
  }

  export type BloqueGroupByOutputType = {
    id: number
    tipo: string
    clave: string
    contenido: string
    orden: number
    seccionId: number
    _count: BloqueCountAggregateOutputType | null
    _avg: BloqueAvgAggregateOutputType | null
    _sum: BloqueSumAggregateOutputType | null
    _min: BloqueMinAggregateOutputType | null
    _max: BloqueMaxAggregateOutputType | null
  }

  type GetBloqueGroupByPayload<T extends BloqueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BloqueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BloqueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BloqueGroupByOutputType[P]>
            : GetScalarType<T[P], BloqueGroupByOutputType[P]>
        }
      >
    >


  export type BloqueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    clave?: boolean
    contenido?: boolean
    orden?: boolean
    seccionId?: boolean
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloque"]>

  export type BloqueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    clave?: boolean
    contenido?: boolean
    orden?: boolean
    seccionId?: boolean
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloque"]>

  export type BloqueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    clave?: boolean
    contenido?: boolean
    orden?: boolean
    seccionId?: boolean
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloque"]>

  export type BloqueSelectScalar = {
    id?: boolean
    tipo?: boolean
    clave?: boolean
    contenido?: boolean
    orden?: boolean
    seccionId?: boolean
  }

  export type BloqueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "clave" | "contenido" | "orden" | "seccionId", ExtArgs["result"]["bloque"]>
  export type BloqueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }
  export type BloqueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }
  export type BloqueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seccion?: boolean | SeccionDefaultArgs<ExtArgs>
  }

  export type $BloquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bloque"
    objects: {
      seccion: Prisma.$SeccionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipo: string
      clave: string
      contenido: string
      orden: number
      seccionId: number
    }, ExtArgs["result"]["bloque"]>
    composites: {}
  }

  type BloqueGetPayload<S extends boolean | null | undefined | BloqueDefaultArgs> = $Result.GetResult<Prisma.$BloquePayload, S>

  type BloqueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BloqueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BloqueCountAggregateInputType | true
    }

  export interface BloqueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bloque'], meta: { name: 'Bloque' } }
    /**
     * Find zero or one Bloque that matches the filter.
     * @param {BloqueFindUniqueArgs} args - Arguments to find a Bloque
     * @example
     * // Get one Bloque
     * const bloque = await prisma.bloque.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BloqueFindUniqueArgs>(args: SelectSubset<T, BloqueFindUniqueArgs<ExtArgs>>): Prisma__BloqueClient<$Result.GetResult<Prisma.$BloquePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bloque that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BloqueFindUniqueOrThrowArgs} args - Arguments to find a Bloque
     * @example
     * // Get one Bloque
     * const bloque = await prisma.bloque.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BloqueFindUniqueOrThrowArgs>(args: SelectSubset<T, BloqueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BloqueClient<$Result.GetResult<Prisma.$BloquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bloque that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueFindFirstArgs} args - Arguments to find a Bloque
     * @example
     * // Get one Bloque
     * const bloque = await prisma.bloque.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BloqueFindFirstArgs>(args?: SelectSubset<T, BloqueFindFirstArgs<ExtArgs>>): Prisma__BloqueClient<$Result.GetResult<Prisma.$BloquePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bloque that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueFindFirstOrThrowArgs} args - Arguments to find a Bloque
     * @example
     * // Get one Bloque
     * const bloque = await prisma.bloque.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BloqueFindFirstOrThrowArgs>(args?: SelectSubset<T, BloqueFindFirstOrThrowArgs<ExtArgs>>): Prisma__BloqueClient<$Result.GetResult<Prisma.$BloquePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bloques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bloques
     * const bloques = await prisma.bloque.findMany()
     * 
     * // Get first 10 Bloques
     * const bloques = await prisma.bloque.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bloqueWithIdOnly = await prisma.bloque.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BloqueFindManyArgs>(args?: SelectSubset<T, BloqueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bloque.
     * @param {BloqueCreateArgs} args - Arguments to create a Bloque.
     * @example
     * // Create one Bloque
     * const Bloque = await prisma.bloque.create({
     *   data: {
     *     // ... data to create a Bloque
     *   }
     * })
     * 
     */
    create<T extends BloqueCreateArgs>(args: SelectSubset<T, BloqueCreateArgs<ExtArgs>>): Prisma__BloqueClient<$Result.GetResult<Prisma.$BloquePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bloques.
     * @param {BloqueCreateManyArgs} args - Arguments to create many Bloques.
     * @example
     * // Create many Bloques
     * const bloque = await prisma.bloque.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BloqueCreateManyArgs>(args?: SelectSubset<T, BloqueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bloques and returns the data saved in the database.
     * @param {BloqueCreateManyAndReturnArgs} args - Arguments to create many Bloques.
     * @example
     * // Create many Bloques
     * const bloque = await prisma.bloque.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bloques and only return the `id`
     * const bloqueWithIdOnly = await prisma.bloque.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BloqueCreateManyAndReturnArgs>(args?: SelectSubset<T, BloqueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloquePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bloque.
     * @param {BloqueDeleteArgs} args - Arguments to delete one Bloque.
     * @example
     * // Delete one Bloque
     * const Bloque = await prisma.bloque.delete({
     *   where: {
     *     // ... filter to delete one Bloque
     *   }
     * })
     * 
     */
    delete<T extends BloqueDeleteArgs>(args: SelectSubset<T, BloqueDeleteArgs<ExtArgs>>): Prisma__BloqueClient<$Result.GetResult<Prisma.$BloquePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bloque.
     * @param {BloqueUpdateArgs} args - Arguments to update one Bloque.
     * @example
     * // Update one Bloque
     * const bloque = await prisma.bloque.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BloqueUpdateArgs>(args: SelectSubset<T, BloqueUpdateArgs<ExtArgs>>): Prisma__BloqueClient<$Result.GetResult<Prisma.$BloquePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bloques.
     * @param {BloqueDeleteManyArgs} args - Arguments to filter Bloques to delete.
     * @example
     * // Delete a few Bloques
     * const { count } = await prisma.bloque.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BloqueDeleteManyArgs>(args?: SelectSubset<T, BloqueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bloques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bloques
     * const bloque = await prisma.bloque.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BloqueUpdateManyArgs>(args: SelectSubset<T, BloqueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bloques and returns the data updated in the database.
     * @param {BloqueUpdateManyAndReturnArgs} args - Arguments to update many Bloques.
     * @example
     * // Update many Bloques
     * const bloque = await prisma.bloque.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bloques and only return the `id`
     * const bloqueWithIdOnly = await prisma.bloque.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BloqueUpdateManyAndReturnArgs>(args: SelectSubset<T, BloqueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloquePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bloque.
     * @param {BloqueUpsertArgs} args - Arguments to update or create a Bloque.
     * @example
     * // Update or create a Bloque
     * const bloque = await prisma.bloque.upsert({
     *   create: {
     *     // ... data to create a Bloque
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bloque we want to update
     *   }
     * })
     */
    upsert<T extends BloqueUpsertArgs>(args: SelectSubset<T, BloqueUpsertArgs<ExtArgs>>): Prisma__BloqueClient<$Result.GetResult<Prisma.$BloquePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bloques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueCountArgs} args - Arguments to filter Bloques to count.
     * @example
     * // Count the number of Bloques
     * const count = await prisma.bloque.count({
     *   where: {
     *     // ... the filter for the Bloques we want to count
     *   }
     * })
    **/
    count<T extends BloqueCountArgs>(
      args?: Subset<T, BloqueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BloqueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bloque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BloqueAggregateArgs>(args: Subset<T, BloqueAggregateArgs>): Prisma.PrismaPromise<GetBloqueAggregateType<T>>

    /**
     * Group by Bloque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BloqueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BloqueGroupByArgs['orderBy'] }
        : { orderBy?: BloqueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BloqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bloque model
   */
  readonly fields: BloqueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bloque.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BloqueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seccion<T extends SeccionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeccionDefaultArgs<ExtArgs>>): Prisma__SeccionClient<$Result.GetResult<Prisma.$SeccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bloque model
   */
  interface BloqueFieldRefs {
    readonly id: FieldRef<"Bloque", 'Int'>
    readonly tipo: FieldRef<"Bloque", 'String'>
    readonly clave: FieldRef<"Bloque", 'String'>
    readonly contenido: FieldRef<"Bloque", 'String'>
    readonly orden: FieldRef<"Bloque", 'Int'>
    readonly seccionId: FieldRef<"Bloque", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Bloque findUnique
   */
  export type BloqueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloque
     */
    select?: BloqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloque
     */
    omit?: BloqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueInclude<ExtArgs> | null
    /**
     * Filter, which Bloque to fetch.
     */
    where: BloqueWhereUniqueInput
  }

  /**
   * Bloque findUniqueOrThrow
   */
  export type BloqueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloque
     */
    select?: BloqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloque
     */
    omit?: BloqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueInclude<ExtArgs> | null
    /**
     * Filter, which Bloque to fetch.
     */
    where: BloqueWhereUniqueInput
  }

  /**
   * Bloque findFirst
   */
  export type BloqueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloque
     */
    select?: BloqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloque
     */
    omit?: BloqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueInclude<ExtArgs> | null
    /**
     * Filter, which Bloque to fetch.
     */
    where?: BloqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bloques to fetch.
     */
    orderBy?: BloqueOrderByWithRelationInput | BloqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bloques.
     */
    cursor?: BloqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bloques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bloques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bloques.
     */
    distinct?: BloqueScalarFieldEnum | BloqueScalarFieldEnum[]
  }

  /**
   * Bloque findFirstOrThrow
   */
  export type BloqueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloque
     */
    select?: BloqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloque
     */
    omit?: BloqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueInclude<ExtArgs> | null
    /**
     * Filter, which Bloque to fetch.
     */
    where?: BloqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bloques to fetch.
     */
    orderBy?: BloqueOrderByWithRelationInput | BloqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bloques.
     */
    cursor?: BloqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bloques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bloques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bloques.
     */
    distinct?: BloqueScalarFieldEnum | BloqueScalarFieldEnum[]
  }

  /**
   * Bloque findMany
   */
  export type BloqueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloque
     */
    select?: BloqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloque
     */
    omit?: BloqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueInclude<ExtArgs> | null
    /**
     * Filter, which Bloques to fetch.
     */
    where?: BloqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bloques to fetch.
     */
    orderBy?: BloqueOrderByWithRelationInput | BloqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bloques.
     */
    cursor?: BloqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bloques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bloques.
     */
    skip?: number
    distinct?: BloqueScalarFieldEnum | BloqueScalarFieldEnum[]
  }

  /**
   * Bloque create
   */
  export type BloqueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloque
     */
    select?: BloqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloque
     */
    omit?: BloqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueInclude<ExtArgs> | null
    /**
     * The data needed to create a Bloque.
     */
    data: XOR<BloqueCreateInput, BloqueUncheckedCreateInput>
  }

  /**
   * Bloque createMany
   */
  export type BloqueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bloques.
     */
    data: BloqueCreateManyInput | BloqueCreateManyInput[]
  }

  /**
   * Bloque createManyAndReturn
   */
  export type BloqueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloque
     */
    select?: BloqueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bloque
     */
    omit?: BloqueOmit<ExtArgs> | null
    /**
     * The data used to create many Bloques.
     */
    data: BloqueCreateManyInput | BloqueCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bloque update
   */
  export type BloqueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloque
     */
    select?: BloqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloque
     */
    omit?: BloqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueInclude<ExtArgs> | null
    /**
     * The data needed to update a Bloque.
     */
    data: XOR<BloqueUpdateInput, BloqueUncheckedUpdateInput>
    /**
     * Choose, which Bloque to update.
     */
    where: BloqueWhereUniqueInput
  }

  /**
   * Bloque updateMany
   */
  export type BloqueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bloques.
     */
    data: XOR<BloqueUpdateManyMutationInput, BloqueUncheckedUpdateManyInput>
    /**
     * Filter which Bloques to update
     */
    where?: BloqueWhereInput
    /**
     * Limit how many Bloques to update.
     */
    limit?: number
  }

  /**
   * Bloque updateManyAndReturn
   */
  export type BloqueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloque
     */
    select?: BloqueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bloque
     */
    omit?: BloqueOmit<ExtArgs> | null
    /**
     * The data used to update Bloques.
     */
    data: XOR<BloqueUpdateManyMutationInput, BloqueUncheckedUpdateManyInput>
    /**
     * Filter which Bloques to update
     */
    where?: BloqueWhereInput
    /**
     * Limit how many Bloques to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bloque upsert
   */
  export type BloqueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloque
     */
    select?: BloqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloque
     */
    omit?: BloqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueInclude<ExtArgs> | null
    /**
     * The filter to search for the Bloque to update in case it exists.
     */
    where: BloqueWhereUniqueInput
    /**
     * In case the Bloque found by the `where` argument doesn't exist, create a new Bloque with this data.
     */
    create: XOR<BloqueCreateInput, BloqueUncheckedCreateInput>
    /**
     * In case the Bloque was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BloqueUpdateInput, BloqueUncheckedUpdateInput>
  }

  /**
   * Bloque delete
   */
  export type BloqueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloque
     */
    select?: BloqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloque
     */
    omit?: BloqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueInclude<ExtArgs> | null
    /**
     * Filter which Bloque to delete.
     */
    where: BloqueWhereUniqueInput
  }

  /**
   * Bloque deleteMany
   */
  export type BloqueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bloques to delete
     */
    where?: BloqueWhereInput
    /**
     * Limit how many Bloques to delete.
     */
    limit?: number
  }

  /**
   * Bloque without action
   */
  export type BloqueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bloque
     */
    select?: BloqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bloque
     */
    omit?: BloqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ServicioClinicoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    imagen: 'imagen'
  };

  export type ServicioClinicoScalarFieldEnum = (typeof ServicioClinicoScalarFieldEnum)[keyof typeof ServicioClinicoScalarFieldEnum]


  export const SeccionScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    nombre: 'nombre'
  };

  export type SeccionScalarFieldEnum = (typeof SeccionScalarFieldEnum)[keyof typeof SeccionScalarFieldEnum]


  export const BloqueScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    clave: 'clave',
    contenido: 'contenido',
    orden: 'orden',
    seccionId: 'seccionId'
  };

  export type BloqueScalarFieldEnum = (typeof BloqueScalarFieldEnum)[keyof typeof BloqueScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ServicioClinicoWhereInput = {
    AND?: ServicioClinicoWhereInput | ServicioClinicoWhereInput[]
    OR?: ServicioClinicoWhereInput[]
    NOT?: ServicioClinicoWhereInput | ServicioClinicoWhereInput[]
    id?: IntFilter<"ServicioClinico"> | number
    titulo?: StringFilter<"ServicioClinico"> | string
    descripcion?: StringFilter<"ServicioClinico"> | string
    imagen?: StringFilter<"ServicioClinico"> | string
  }

  export type ServicioClinicoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    imagen?: SortOrder
  }

  export type ServicioClinicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServicioClinicoWhereInput | ServicioClinicoWhereInput[]
    OR?: ServicioClinicoWhereInput[]
    NOT?: ServicioClinicoWhereInput | ServicioClinicoWhereInput[]
    titulo?: StringFilter<"ServicioClinico"> | string
    descripcion?: StringFilter<"ServicioClinico"> | string
    imagen?: StringFilter<"ServicioClinico"> | string
  }, "id">

  export type ServicioClinicoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    imagen?: SortOrder
    _count?: ServicioClinicoCountOrderByAggregateInput
    _avg?: ServicioClinicoAvgOrderByAggregateInput
    _max?: ServicioClinicoMaxOrderByAggregateInput
    _min?: ServicioClinicoMinOrderByAggregateInput
    _sum?: ServicioClinicoSumOrderByAggregateInput
  }

  export type ServicioClinicoScalarWhereWithAggregatesInput = {
    AND?: ServicioClinicoScalarWhereWithAggregatesInput | ServicioClinicoScalarWhereWithAggregatesInput[]
    OR?: ServicioClinicoScalarWhereWithAggregatesInput[]
    NOT?: ServicioClinicoScalarWhereWithAggregatesInput | ServicioClinicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServicioClinico"> | number
    titulo?: StringWithAggregatesFilter<"ServicioClinico"> | string
    descripcion?: StringWithAggregatesFilter<"ServicioClinico"> | string
    imagen?: StringWithAggregatesFilter<"ServicioClinico"> | string
  }

  export type SeccionWhereInput = {
    AND?: SeccionWhereInput | SeccionWhereInput[]
    OR?: SeccionWhereInput[]
    NOT?: SeccionWhereInput | SeccionWhereInput[]
    id?: IntFilter<"Seccion"> | number
    slug?: StringFilter<"Seccion"> | string
    nombre?: StringFilter<"Seccion"> | string
    bloques?: BloqueListRelationFilter
  }

  export type SeccionOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    nombre?: SortOrder
    bloques?: BloqueOrderByRelationAggregateInput
  }

  export type SeccionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: SeccionWhereInput | SeccionWhereInput[]
    OR?: SeccionWhereInput[]
    NOT?: SeccionWhereInput | SeccionWhereInput[]
    nombre?: StringFilter<"Seccion"> | string
    bloques?: BloqueListRelationFilter
  }, "id" | "slug">

  export type SeccionOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    nombre?: SortOrder
    _count?: SeccionCountOrderByAggregateInput
    _avg?: SeccionAvgOrderByAggregateInput
    _max?: SeccionMaxOrderByAggregateInput
    _min?: SeccionMinOrderByAggregateInput
    _sum?: SeccionSumOrderByAggregateInput
  }

  export type SeccionScalarWhereWithAggregatesInput = {
    AND?: SeccionScalarWhereWithAggregatesInput | SeccionScalarWhereWithAggregatesInput[]
    OR?: SeccionScalarWhereWithAggregatesInput[]
    NOT?: SeccionScalarWhereWithAggregatesInput | SeccionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Seccion"> | number
    slug?: StringWithAggregatesFilter<"Seccion"> | string
    nombre?: StringWithAggregatesFilter<"Seccion"> | string
  }

  export type BloqueWhereInput = {
    AND?: BloqueWhereInput | BloqueWhereInput[]
    OR?: BloqueWhereInput[]
    NOT?: BloqueWhereInput | BloqueWhereInput[]
    id?: IntFilter<"Bloque"> | number
    tipo?: StringFilter<"Bloque"> | string
    clave?: StringFilter<"Bloque"> | string
    contenido?: StringFilter<"Bloque"> | string
    orden?: IntFilter<"Bloque"> | number
    seccionId?: IntFilter<"Bloque"> | number
    seccion?: XOR<SeccionScalarRelationFilter, SeccionWhereInput>
  }

  export type BloqueOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    clave?: SortOrder
    contenido?: SortOrder
    orden?: SortOrder
    seccionId?: SortOrder
    seccion?: SeccionOrderByWithRelationInput
  }

  export type BloqueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BloqueWhereInput | BloqueWhereInput[]
    OR?: BloqueWhereInput[]
    NOT?: BloqueWhereInput | BloqueWhereInput[]
    tipo?: StringFilter<"Bloque"> | string
    clave?: StringFilter<"Bloque"> | string
    contenido?: StringFilter<"Bloque"> | string
    orden?: IntFilter<"Bloque"> | number
    seccionId?: IntFilter<"Bloque"> | number
    seccion?: XOR<SeccionScalarRelationFilter, SeccionWhereInput>
  }, "id">

  export type BloqueOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    clave?: SortOrder
    contenido?: SortOrder
    orden?: SortOrder
    seccionId?: SortOrder
    _count?: BloqueCountOrderByAggregateInput
    _avg?: BloqueAvgOrderByAggregateInput
    _max?: BloqueMaxOrderByAggregateInput
    _min?: BloqueMinOrderByAggregateInput
    _sum?: BloqueSumOrderByAggregateInput
  }

  export type BloqueScalarWhereWithAggregatesInput = {
    AND?: BloqueScalarWhereWithAggregatesInput | BloqueScalarWhereWithAggregatesInput[]
    OR?: BloqueScalarWhereWithAggregatesInput[]
    NOT?: BloqueScalarWhereWithAggregatesInput | BloqueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bloque"> | number
    tipo?: StringWithAggregatesFilter<"Bloque"> | string
    clave?: StringWithAggregatesFilter<"Bloque"> | string
    contenido?: StringWithAggregatesFilter<"Bloque"> | string
    orden?: IntWithAggregatesFilter<"Bloque"> | number
    seccionId?: IntWithAggregatesFilter<"Bloque"> | number
  }

  export type ServicioClinicoCreateInput = {
    titulo: string
    descripcion: string
    imagen: string
  }

  export type ServicioClinicoUncheckedCreateInput = {
    id?: number
    titulo: string
    descripcion: string
    imagen: string
  }

  export type ServicioClinicoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
  }

  export type ServicioClinicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
  }

  export type ServicioClinicoCreateManyInput = {
    id?: number
    titulo: string
    descripcion: string
    imagen: string
  }

  export type ServicioClinicoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
  }

  export type ServicioClinicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    imagen?: StringFieldUpdateOperationsInput | string
  }

  export type SeccionCreateInput = {
    slug: string
    nombre: string
    bloques?: BloqueCreateNestedManyWithoutSeccionInput
  }

  export type SeccionUncheckedCreateInput = {
    id?: number
    slug: string
    nombre: string
    bloques?: BloqueUncheckedCreateNestedManyWithoutSeccionInput
  }

  export type SeccionUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    bloques?: BloqueUpdateManyWithoutSeccionNestedInput
  }

  export type SeccionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    bloques?: BloqueUncheckedUpdateManyWithoutSeccionNestedInput
  }

  export type SeccionCreateManyInput = {
    id?: number
    slug: string
    nombre: string
  }

  export type SeccionUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type SeccionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type BloqueCreateInput = {
    tipo: string
    clave: string
    contenido: string
    orden: number
    seccion: SeccionCreateNestedOneWithoutBloquesInput
  }

  export type BloqueUncheckedCreateInput = {
    id?: number
    tipo: string
    clave: string
    contenido: string
    orden: number
    seccionId: number
  }

  export type BloqueUpdateInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    seccion?: SeccionUpdateOneRequiredWithoutBloquesNestedInput
  }

  export type BloqueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    seccionId?: IntFieldUpdateOperationsInput | number
  }

  export type BloqueCreateManyInput = {
    id?: number
    tipo: string
    clave: string
    contenido: string
    orden: number
    seccionId: number
  }

  export type BloqueUpdateManyMutationInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type BloqueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    seccionId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ServicioClinicoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    imagen?: SortOrder
  }

  export type ServicioClinicoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServicioClinicoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    imagen?: SortOrder
  }

  export type ServicioClinicoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    imagen?: SortOrder
  }

  export type ServicioClinicoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BloqueListRelationFilter = {
    every?: BloqueWhereInput
    some?: BloqueWhereInput
    none?: BloqueWhereInput
  }

  export type BloqueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeccionCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    nombre?: SortOrder
  }

  export type SeccionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SeccionMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    nombre?: SortOrder
  }

  export type SeccionMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    nombre?: SortOrder
  }

  export type SeccionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SeccionScalarRelationFilter = {
    is?: SeccionWhereInput
    isNot?: SeccionWhereInput
  }

  export type BloqueCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    clave?: SortOrder
    contenido?: SortOrder
    orden?: SortOrder
    seccionId?: SortOrder
  }

  export type BloqueAvgOrderByAggregateInput = {
    id?: SortOrder
    orden?: SortOrder
    seccionId?: SortOrder
  }

  export type BloqueMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    clave?: SortOrder
    contenido?: SortOrder
    orden?: SortOrder
    seccionId?: SortOrder
  }

  export type BloqueMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    clave?: SortOrder
    contenido?: SortOrder
    orden?: SortOrder
    seccionId?: SortOrder
  }

  export type BloqueSumOrderByAggregateInput = {
    id?: SortOrder
    orden?: SortOrder
    seccionId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BloqueCreateNestedManyWithoutSeccionInput = {
    create?: XOR<BloqueCreateWithoutSeccionInput, BloqueUncheckedCreateWithoutSeccionInput> | BloqueCreateWithoutSeccionInput[] | BloqueUncheckedCreateWithoutSeccionInput[]
    connectOrCreate?: BloqueCreateOrConnectWithoutSeccionInput | BloqueCreateOrConnectWithoutSeccionInput[]
    createMany?: BloqueCreateManySeccionInputEnvelope
    connect?: BloqueWhereUniqueInput | BloqueWhereUniqueInput[]
  }

  export type BloqueUncheckedCreateNestedManyWithoutSeccionInput = {
    create?: XOR<BloqueCreateWithoutSeccionInput, BloqueUncheckedCreateWithoutSeccionInput> | BloqueCreateWithoutSeccionInput[] | BloqueUncheckedCreateWithoutSeccionInput[]
    connectOrCreate?: BloqueCreateOrConnectWithoutSeccionInput | BloqueCreateOrConnectWithoutSeccionInput[]
    createMany?: BloqueCreateManySeccionInputEnvelope
    connect?: BloqueWhereUniqueInput | BloqueWhereUniqueInput[]
  }

  export type BloqueUpdateManyWithoutSeccionNestedInput = {
    create?: XOR<BloqueCreateWithoutSeccionInput, BloqueUncheckedCreateWithoutSeccionInput> | BloqueCreateWithoutSeccionInput[] | BloqueUncheckedCreateWithoutSeccionInput[]
    connectOrCreate?: BloqueCreateOrConnectWithoutSeccionInput | BloqueCreateOrConnectWithoutSeccionInput[]
    upsert?: BloqueUpsertWithWhereUniqueWithoutSeccionInput | BloqueUpsertWithWhereUniqueWithoutSeccionInput[]
    createMany?: BloqueCreateManySeccionInputEnvelope
    set?: BloqueWhereUniqueInput | BloqueWhereUniqueInput[]
    disconnect?: BloqueWhereUniqueInput | BloqueWhereUniqueInput[]
    delete?: BloqueWhereUniqueInput | BloqueWhereUniqueInput[]
    connect?: BloqueWhereUniqueInput | BloqueWhereUniqueInput[]
    update?: BloqueUpdateWithWhereUniqueWithoutSeccionInput | BloqueUpdateWithWhereUniqueWithoutSeccionInput[]
    updateMany?: BloqueUpdateManyWithWhereWithoutSeccionInput | BloqueUpdateManyWithWhereWithoutSeccionInput[]
    deleteMany?: BloqueScalarWhereInput | BloqueScalarWhereInput[]
  }

  export type BloqueUncheckedUpdateManyWithoutSeccionNestedInput = {
    create?: XOR<BloqueCreateWithoutSeccionInput, BloqueUncheckedCreateWithoutSeccionInput> | BloqueCreateWithoutSeccionInput[] | BloqueUncheckedCreateWithoutSeccionInput[]
    connectOrCreate?: BloqueCreateOrConnectWithoutSeccionInput | BloqueCreateOrConnectWithoutSeccionInput[]
    upsert?: BloqueUpsertWithWhereUniqueWithoutSeccionInput | BloqueUpsertWithWhereUniqueWithoutSeccionInput[]
    createMany?: BloqueCreateManySeccionInputEnvelope
    set?: BloqueWhereUniqueInput | BloqueWhereUniqueInput[]
    disconnect?: BloqueWhereUniqueInput | BloqueWhereUniqueInput[]
    delete?: BloqueWhereUniqueInput | BloqueWhereUniqueInput[]
    connect?: BloqueWhereUniqueInput | BloqueWhereUniqueInput[]
    update?: BloqueUpdateWithWhereUniqueWithoutSeccionInput | BloqueUpdateWithWhereUniqueWithoutSeccionInput[]
    updateMany?: BloqueUpdateManyWithWhereWithoutSeccionInput | BloqueUpdateManyWithWhereWithoutSeccionInput[]
    deleteMany?: BloqueScalarWhereInput | BloqueScalarWhereInput[]
  }

  export type SeccionCreateNestedOneWithoutBloquesInput = {
    create?: XOR<SeccionCreateWithoutBloquesInput, SeccionUncheckedCreateWithoutBloquesInput>
    connectOrCreate?: SeccionCreateOrConnectWithoutBloquesInput
    connect?: SeccionWhereUniqueInput
  }

  export type SeccionUpdateOneRequiredWithoutBloquesNestedInput = {
    create?: XOR<SeccionCreateWithoutBloquesInput, SeccionUncheckedCreateWithoutBloquesInput>
    connectOrCreate?: SeccionCreateOrConnectWithoutBloquesInput
    upsert?: SeccionUpsertWithoutBloquesInput
    connect?: SeccionWhereUniqueInput
    update?: XOR<XOR<SeccionUpdateToOneWithWhereWithoutBloquesInput, SeccionUpdateWithoutBloquesInput>, SeccionUncheckedUpdateWithoutBloquesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BloqueCreateWithoutSeccionInput = {
    tipo: string
    clave: string
    contenido: string
    orden: number
  }

  export type BloqueUncheckedCreateWithoutSeccionInput = {
    id?: number
    tipo: string
    clave: string
    contenido: string
    orden: number
  }

  export type BloqueCreateOrConnectWithoutSeccionInput = {
    where: BloqueWhereUniqueInput
    create: XOR<BloqueCreateWithoutSeccionInput, BloqueUncheckedCreateWithoutSeccionInput>
  }

  export type BloqueCreateManySeccionInputEnvelope = {
    data: BloqueCreateManySeccionInput | BloqueCreateManySeccionInput[]
  }

  export type BloqueUpsertWithWhereUniqueWithoutSeccionInput = {
    where: BloqueWhereUniqueInput
    update: XOR<BloqueUpdateWithoutSeccionInput, BloqueUncheckedUpdateWithoutSeccionInput>
    create: XOR<BloqueCreateWithoutSeccionInput, BloqueUncheckedCreateWithoutSeccionInput>
  }

  export type BloqueUpdateWithWhereUniqueWithoutSeccionInput = {
    where: BloqueWhereUniqueInput
    data: XOR<BloqueUpdateWithoutSeccionInput, BloqueUncheckedUpdateWithoutSeccionInput>
  }

  export type BloqueUpdateManyWithWhereWithoutSeccionInput = {
    where: BloqueScalarWhereInput
    data: XOR<BloqueUpdateManyMutationInput, BloqueUncheckedUpdateManyWithoutSeccionInput>
  }

  export type BloqueScalarWhereInput = {
    AND?: BloqueScalarWhereInput | BloqueScalarWhereInput[]
    OR?: BloqueScalarWhereInput[]
    NOT?: BloqueScalarWhereInput | BloqueScalarWhereInput[]
    id?: IntFilter<"Bloque"> | number
    tipo?: StringFilter<"Bloque"> | string
    clave?: StringFilter<"Bloque"> | string
    contenido?: StringFilter<"Bloque"> | string
    orden?: IntFilter<"Bloque"> | number
    seccionId?: IntFilter<"Bloque"> | number
  }

  export type SeccionCreateWithoutBloquesInput = {
    slug: string
    nombre: string
  }

  export type SeccionUncheckedCreateWithoutBloquesInput = {
    id?: number
    slug: string
    nombre: string
  }

  export type SeccionCreateOrConnectWithoutBloquesInput = {
    where: SeccionWhereUniqueInput
    create: XOR<SeccionCreateWithoutBloquesInput, SeccionUncheckedCreateWithoutBloquesInput>
  }

  export type SeccionUpsertWithoutBloquesInput = {
    update: XOR<SeccionUpdateWithoutBloquesInput, SeccionUncheckedUpdateWithoutBloquesInput>
    create: XOR<SeccionCreateWithoutBloquesInput, SeccionUncheckedCreateWithoutBloquesInput>
    where?: SeccionWhereInput
  }

  export type SeccionUpdateToOneWithWhereWithoutBloquesInput = {
    where?: SeccionWhereInput
    data: XOR<SeccionUpdateWithoutBloquesInput, SeccionUncheckedUpdateWithoutBloquesInput>
  }

  export type SeccionUpdateWithoutBloquesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type SeccionUncheckedUpdateWithoutBloquesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type BloqueCreateManySeccionInput = {
    id?: number
    tipo: string
    clave: string
    contenido: string
    orden: number
  }

  export type BloqueUpdateWithoutSeccionInput = {
    tipo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type BloqueUncheckedUpdateWithoutSeccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }

  export type BloqueUncheckedUpdateManyWithoutSeccionInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    clave?: StringFieldUpdateOperationsInput | string
    contenido?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}