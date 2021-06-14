import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectDataService } from 'src/app/core/service/project-data.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  active = 1;
  Output: number;

  formGroup: FormGroup = new FormGroup({
    Collar_bone_x: new FormControl('', [Validators.required]),
    Collar_bone_y: new FormControl('', [Validators.required]),
    Collar_bone_z: new FormControl('', [Validators.required]),
    Fore_arm_x: new FormControl('', [Validators.required]),
    Fore_arm_y: new FormControl('', [Validators.required]),
    Fore_arm_z: new FormControl('', [Validators.required]),
    Hand_x: new FormControl('', [Validators.required]),
    Hand_y: new FormControl('', [Validators.required]),
    Hand_z: new FormControl('', [Validators.required]),
    Upper_arm_x: new FormControl('', [Validators.required]),
    Upper_arm_y: new FormControl('', [Validators.required]),
    Upper_arm_z: new FormControl('', [Validators.required])
  });

  constructor(private projectDataService: ProjectDataService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formGroup.value);
    const data =
    {
      Collar_bone_x: this.formGroup.controls.Collar_bone_x.value,
      Collar_bone_y: this.formGroup.controls.Collar_bone_y.value,
      Collar_bone_z: this.formGroup.controls.Collar_bone_z.value,
      Fore_arm_x: this.formGroup.controls.Fore_arm_x.value,
      Fore_arm_y: this.formGroup.controls.Fore_arm_y.value,
      Fore_arm_z: this.formGroup.controls.Fore_arm_z.value,
      Hand_x: this.formGroup.controls.Hand_x.value,
      Hand_y: this.formGroup.controls.Hand_y.value,
      Hand_z: this.formGroup.controls.Hand_z.value,
      Upper_arm_x: this.formGroup.controls.Upper_arm_x.value,
      Upper_arm_y: this.formGroup.controls.Upper_arm_y.value,
      Upper_arm_z: this.formGroup.controls.Upper_arm_z.value
    }


    if (this.formGroup.valid == true) {
      this.projectDataService.getPrediction(data).subscribe(res => {
        console.log(res);
        this.Output = res.predict;
        console.log('Succefully Added');
        this.formGroup.reset();
      });
    }
    else {
      console.log('Something wrong');
    }

  }

}
