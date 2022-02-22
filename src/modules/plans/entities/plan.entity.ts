import { BaseEntity, Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity({
  name: 'plans',
})
export class PlanEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', name: 'name', length: 128 })
  public name: string;

  @Column({ name: 'free_minutes' })
  public free_minutes: number;

  constructor(name: string, free_minutes: number) {
    super();
    this.name = name;
    this.free_minutes = free_minutes;
  }
}
