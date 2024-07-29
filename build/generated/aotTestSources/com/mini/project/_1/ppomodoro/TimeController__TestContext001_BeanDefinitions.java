package com.mini.project._1.ppomodoro;

import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.InstanceSupplier;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link TimeController}.
 */
@Generated
public class TimeController__TestContext001_BeanDefinitions {
  /**
   * Get the bean instance supplier for 'timeController'.
   */
  private static BeanInstanceSupplier<TimeController> getTimeControllerInstanceSupplier() {
    return BeanInstanceSupplier.<TimeController>forConstructor(TimeRepository.class)
            .withGenerator((registeredBean, args) -> new TimeController(args.get(0)));
  }

  /**
   * Get the bean definition for 'timeController'.
   */
  public static BeanDefinition getTimeControllerBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(TimeController.class);
    InstanceSupplier<TimeController> instanceSupplier = getTimeControllerInstanceSupplier();
    instanceSupplier = instanceSupplier.andThen(TimeController__TestContext001_Autowiring::apply);
    beanDefinition.setInstanceSupplier(instanceSupplier);
    return beanDefinition;
  }
}
