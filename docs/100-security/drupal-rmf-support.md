# Supporting RMF Controls with Drupal Tools & Practices

| _RMF_   | _Control Title_                       | _Drupal Tool / Practices_                                                                | _Notes_                     |
| ------- | ------------------------------------- | ---------------------------------------------------------------------------------------- | --------------------------- |
| AC-2    | Account Management                    | User module                                                                              | core                        |
| AC-2(5) | Inactivity Logout                     | autologout                                                                               | contrib                     |
| AC-6    | Least Privilege                       | Roles and perms                                                                          | core                        |
| AC-6(9) | Audit Use of Privileged Functions     | SELinux auditd                                                                           | Red Hat SELinux             |
| IA-5    | Authenticator Management              | password_policy                                                                          | contrib                     |
| AU-2    | List the Auditable Events             | logging_alerts                                                                           | contrib                     |
| AU-6    | Audit Review, Analysis, And Reporting | Syslog / ELK                                                                             | DevOps                      |
| SA-3    | System Development Lifecycle          | Agile Methodology                                                                        | Agile Government Leadership |
| SA-5    | Use of Live Data                      | Drush sqlsanitize, Devel Generate (or Faker)                                             | drush contrib               |
| SA-10   | Developer Configuration Management    | Code Reviews Automated Testing                                                           | Team structure, DevOps      |
| SA-15   | Development Process                   | E.g. GitFlow                                                                             | Jenkins, DevOps.            |
| CM-3    | Configuration Change Control          | Drupal 7 Features, Drupal 8 CMI                                                          | contrib, core               |
| PS-1    | Personnel Security Policy             | CivicActions/security-policy                                                             | Write one!                  |
| RA-5    | Vulnerability Scanning                | Security Review, Paranoia, [OpenSCAP/GovReady](https://galaxy.ansible.com/CivicActions/) | contrib, contrib, GitHub    |
| SC-7    | Deny by Default / Allow by Exception  | CDN, VPC, iptables, Bastion SSH                                                          | Sysadmin                    |
| SC-13   | Cryptographic Protection              | Encrypt, Field Encrypt, File Encrypt                                                     | contrib                     |
| SC-18   | Prevent Downloading Execution         | SecKit Private file system                                                               | contrib, core               |
