import { BaseEntity, Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity({
  name: 'tariffs',
})
export class TariffEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: 'origin' })
  public origin: number;

  @Column({ name: 'destination' })
  public destination: number;

  @Column({ type: 'decimal', name: 'tariff', precision: 3, scale: 2 })
  public tariff: number;

  constructor(origin: number, destination: number, tariff: number) {
    super();
    this.origin = origin;
    this.destination = destination;
    this.tariff = tariff;
  }
}
