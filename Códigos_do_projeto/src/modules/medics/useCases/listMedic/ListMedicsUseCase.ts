import { Medic } from "@modules/medics/infra/typeorm/entities/Medic";
import { IMedicsRepository } from "@modules/medics/repositories/IMedicsRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class ListMedicsUseCase {
  constructor(
    @inject("MedicsRepository")
    private medicsRepository: IMedicsRepository
  ) { }

  async execute(): Promise<Medic[]> {
    const medics = await this.medicsRepository.getAll()
    return medics
  }
}

export { ListMedicsUseCase }