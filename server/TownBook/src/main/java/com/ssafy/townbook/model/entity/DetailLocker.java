package com.ssafy.townbook.model.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
@DynamicInsert
public class DetailLocker {
    
    @Id
    @Column(name = "detail_locker_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long detailLockerNo;
    
    @OneToOne(mappedBy = "detailLocker")
    private BookLog bookLog;
    
    @NotNull
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "`fk-locker-detail_locker`")
    private Locker locker;
    
    @Column(name = "detail_locker_isEmpty")
    @ColumnDefault("true")
    private Boolean detailLockerIsEmpty;
    
    @Builder
    public DetailLocker(Long detailLockerNo, Locker locker, Boolean detailLockerIsEmpty) {
        this.detailLockerNo      = detailLockerNo;
        this.locker              = locker;
        this.detailLockerIsEmpty = detailLockerIsEmpty;
    }
}